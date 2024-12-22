"use client";

import { useState } from "react";
import { Semester } from "@/components/semester";
import { semesterData } from "@/lib/semester-data";
import { Card, CardContent } from "@/components/ui/card";

export function GradeCalculator() {
  const [semesterResults, setSemesterResults] = useState<{
    [key: string]: { sgpa: number; cgpa: number };
  }>({});

  const updateSemesterResult = (
    semesterId: string,
    sgpa: number,
    cgpa: number
  ) => {
    setSemesterResults((prev) => ({
      ...prev,
      [semesterId]: { sgpa, cgpa },
    }));
  };

  return (
    <div className="space-y-8">
      {semesterData.map((semester, index) => (
        <Semester
          key={semester.id}
          semester={semester}
          previousSemesters={semesterData.slice(0, index)}
          onCalculate={updateSemesterResult}
          results={semesterResults}
        />
      ))}

      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Overall CGPA</h2>
            <p className="text-3xl font-bold text-primary">
              {calculateOverallCGPA(semesterResults)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function calculateOverallCGPA(results: {
  [key: string]: { sgpa: number; cgpa: number };
}): string {
  const validResults = Object.values(results).filter(
    (result) => result.sgpa > 0
  );
  if (validResults.length === 0) return "-";

  const totalSGPA = validResults.reduce((sum, result) => sum + result.sgpa, 0);
  return (totalSGPA / validResults.length).toFixed(2);
}
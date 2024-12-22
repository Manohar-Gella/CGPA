"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SemesterData, Subject } from "@/lib/types";

interface SemesterProps {
  semester: SemesterData;
  previousSemesters: SemesterData[];
  onCalculate: (semesterId: string, sgpa: number, cgpa: number) => void;
  results: {
    [key: string]: { sgpa: number; cgpa: number };
  };
}

export function Semester({
  semester,
  previousSemesters,
  onCalculate,
  results,
}: SemesterProps) {
  const [grades, setGrades] = useState<{ [key: string]: number }>({});

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalScore = 0;

    semester.subjects.forEach((subject) => {
      const gradePoints = grades[subject.id] || 0;
      totalCredits += subject.credits;
      totalScore += subject.credits * gradePoints;
    });

    const sgpa = totalCredits ? totalScore / totalCredits : 0;
    
    // Calculate CGPA including current semester
    const allSemesters = [...previousSemesters, semester];
    let totalSGPA = sgpa;
    let validSemesters = 1;

    previousSemesters.forEach((prevSem) => {
      const prevResult = results[prevSem.id];
      if (prevResult && prevResult.sgpa > 0) {
        totalSGPA += prevResult.sgpa;
        validSemesters++;
      }
    });

    const cgpa = totalSGPA / validSemesters;
    
    onCalculate(semester.id, sgpa, cgpa);
  };

  const handleGradeChange = (subjectId: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    if (numValue >= 0 && numValue <= 10) {
      setGrades((prev) => ({
        ...prev,
        [subjectId]: numValue,
      }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{semester.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead className="w-[100px] text-center">Credits</TableHead>
              <TableHead className="w-[150px] text-center">Grade Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {semester.subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.name}</TableCell>
                <TableCell className="text-center">{subject.credits}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={grades[subject.id] || ""}
                    onChange={(e) => handleGradeChange(subject.id, e.target.value)}
                    className="w-full text-center"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 flex justify-center gap-8">
          <Button onClick={calculateSGPA}>Calculate</Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Semester GPA</p>
            <p className="text-xl font-bold">
              {results[semester.id]?.sgpa.toFixed(2) || "-"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Cumulative GPA</p>
            <p className="text-xl font-bold">
              {results[semester.id]?.cgpa.toFixed(2) || "-"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
"use client";

import { GradeCalculator } from "@/components/grade-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Academic Grade Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Exclusive for Andhra University College of Engineering - Department of Computer Science
          </p>
          <p className="text-center text-muted-foreground">
            Calculate your SGPA and CGPA for each semester
          </p>
        </CardContent>
      </Card>
      <GradeCalculator />
    </div>
  );
}
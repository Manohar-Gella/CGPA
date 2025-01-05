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
            For contributions fork the project at "github.com/Manohar-Gella/cgpa"
          </p>
          <p className="text-center text-muted-foreground">
            *Calculate your SGPA and CGPA for each semester*
          </p>
          <p className="text-center text-muted-foreground">
            Grade calculator for year 2 and 3 will be added soon!
          </p>
        </CardContent>
      </Card>
      <GradeCalculator />
    </div>
  );
}
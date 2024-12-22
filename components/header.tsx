"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight">Academic Grade Calculator</h1>
            <p className="text-sm text-muted-foreground">
              Exclusive for Andhra University College of Engineering - Department of Computer Science
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
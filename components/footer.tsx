"use client";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Manohar Labs
          </h2>
          <a
            href="mailto:imanohargella@gmail.com"
            className="flex items-center justify-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:text-blue-500" />
            <span className="group-hover:text-blue-500">imanohargella@gmail.com</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Built with 🧠 for students
        </p>
      </div>
    </footer>
  );
}
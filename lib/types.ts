export interface Subject {
  id: string;
  name: string;
  credits: number;
}

export interface SemesterData {
  id: string;
  name: string;
  subjects: Subject[];
}
import { Question } from "./question.interface";

export interface Page {
  id: string;
  questions: Question[];
  number?: number;
  finalTime: string;
}
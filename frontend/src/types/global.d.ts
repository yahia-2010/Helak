import { ButtonVariant } from "@/components/Button/Button";

declare global {
  // Types
  type Gender = "male" | "female";
  type DataErrorsType = { name: string; error: string }[];
  type Theme = "light" | "dark";

  // Interfaces
  interface FormFieldInterface {
    type: "select" | "input" | "radio";
    value: string;
    required: boolean;
    name: string;
    label: string;
    inputType?: string;
    values?: string[];
    selections?: string[];
    options?: string[];
  }

  interface HalakaInterface {
    id: number;
    name: string;
    description?: string;
    image?: string;
    supervisors: number[];
    sheikhs: number[];
    students: number[];
    free: boolean;
    online: boolean;
  }

  interface Action {
    text: string;
    variant?: ButtonVariant;
    action?: () => void;
  }

  interface UserInterface {
    id: number;
    name: { fName: string; lName: string };
    age: number;
    gender: Gender;
    eduLevel?: string;
    language: string;
    country?: string;
    email?: string;
    phone?: string;
    photo?: string;
    password: string;
    helak: number[];
    amounts: { name: string; finished: number; left: number; total: number }[];
    memorized: {
      amounts: {
        name: string;
        finished: number;
        left: number;
        total: number;
      }[];
      date: string;
    }[];
  }
}

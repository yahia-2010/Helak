export {};

declare global {
  // Types
  type Gender = "male" | "female";
  type DataErrorsType = { name: string; error: string }[];
  type Theme = "light" | "dark";
  type ButtonVariant = "primary" | "secondary" | "text";

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
    free: boolean;
    online: boolean;
  }

  interface Action {
    text: string;
    variant?: ButtonVariant;
    action?: () => void;
  }

  interface UserInterface {
    name: { fName: string | null; lName: string | null };
    age: number | null;
    gender: Gender | null;
    eduLevel?: string | null;
    language: string | null;
    country?: string | null;
    email?: string | null;
    phone?: string | null;
    photo?: string | null;
    password: string | null;
  }
}

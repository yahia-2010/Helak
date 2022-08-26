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
    name?: { fName?: string; lName?: string };
    age?: number;
    gender?: Gender;
    eduLevel?: string;
    language?: string;
    country?: string;
    email?: string;
    phone?: string;
    photo?: string;
    password?: string;
    helak?: HalakaInterface[];
  }
}

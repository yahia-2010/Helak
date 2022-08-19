export {};

declare global {
  // Types
  type ButtonVariant = "primary" | "secondary" | "text";
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
  }

  interface Action {
    text: string;
    variant?: ButtonVariant;
    action?: () => void;
  }
}

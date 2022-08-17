export {};

declare global {
  // Types
  type Gender = "male" | "female";
  type DataErrorsType = { name: string; error: string }[];

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
}

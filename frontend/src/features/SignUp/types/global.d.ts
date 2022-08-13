export {};

declare global {
  interface formDataInterface {
    fName: { value: string; required: boolean };
    lName: { value: string; required: boolean };
    age: { value: number | null; required: boolean };
    eduLevel: { value: string; required: boolean };
    gender: { value: Gender | ""; required: boolean };
    language: { value: string; required: boolean };
    country: { value: string; required: boolean };
    email: { value: string; required: boolean };
    phone: { value: string; required: boolean };
    password: { value: string; required: boolean };
    confirmPassword: { value: string; required: boolean };
  }
}

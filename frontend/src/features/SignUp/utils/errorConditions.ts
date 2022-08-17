import validateEmail from "@/utils/util-functions/validateEmail";

const errorConditions = (
  field: FormFieldInterface,
  fields: FormFieldInterface[]
) =>
  (field.required && !field.value) ||
  (field?.inputType === "email" && !validateEmail(field.value)) ||
  ((field.type = "input") &&
    field?.inputType === "password" &&
    fields[fields.indexOf(field) + 1]?.inputType === "password" &&
    fields[fields.indexOf(field) + 1].name === "confirmPassword" &&
    field.value !== fields[fields.indexOf(field) + 1].value);

export default errorConditions;

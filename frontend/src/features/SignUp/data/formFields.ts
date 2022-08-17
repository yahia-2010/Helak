import selections from "./selections";

const formFields: FormFieldInterface[] = [
  {
    name: "fName",
    value: "",
    required: true,
    type: "input",
    label: "الاسم الأول",
  },
  {
    name: "lName",
    value: "",
    required: true,
    type: "input",
    label: "الاسم الأخير",
  },
  {
    name: "age",
    value: "",
    required: true,
    type: "input",
    inputType: "number",
    label: "العمر",
  },
  {
    name: "eduLevel",
    value: selections.eduLevels[0],
    required: true,
    type: "select",
    label: "المرحلة الدراسية",
    selections: selections.eduLevels,
  },
  {
    name: "gender",
    value: "",
    required: true,
    type: "radio",
    label: "الجنس",
    options: ["ذكر", "أنثى"],
    values: ["male", "female"],
  },
  {
    name: "language",
    value: selections.langs[0],
    required: true,
    type: "select",
    label: "اللغة",
    selections: selections.langs,
  },
  {
    name: "country",
    value: selections.countries[0],
    required: false,
    type: "select",
    label: "الدولة",
    selections: selections.countries,
  },
  {
    name: "email",
    value: "",
    required: false,
    type: "input",
    inputType: "email",
    label: "البريد الإلكتروني",
  },
  {
    name: "phone",
    value: "",
    required: false,
    type: "input",
    label: "رقم الجوال",
  },
  {
    name: "password",
    value: "",
    required: true,
    type: "input",
    inputType: "password",
    label: "كلمة المرور",
  },
  {
    name: "confirmPassword",
    value: "",
    required: true,
    type: "input",
    inputType: "password",
    label: "تأكيد كلمة المرور",
  },
];

export default formFields;

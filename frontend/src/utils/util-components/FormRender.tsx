import React from "react";
import Input from "@/components/forms/Input";
import Radio from "@/components/forms/Radio";
import Select from "@/components/forms/Select";
import handleChangeFormFields from "../util-functions/handleChangeFormFields";

const FormRender: React.FC<{
  fields: FormFieldInterface[];
  setFields: React.Dispatch<React.SetStateAction<FormFieldInterface[]>>;
  errors: string[];
}> = ({ fields, setFields, errors }) => {
  const components = fields.map((field, index) => {
    if (field.type === "input") {
      return (
        <Input
          key={field.name}
          error={errors.includes(field.name)}
          {...field}
          type={field.inputType}
          onChange={(value) =>
            handleChangeFormFields(value, setFields, index, fields)
          }
        />
      );
    } else if (field.type === "radio") {
      return (
        <Radio
          key={field.name}
          error={errors.includes(field.name)}
          handleSelect={(value) =>
            handleChangeFormFields(value, setFields, index, fields)
          }
          {...field}
        />
      );
    } else {
      return (
        <Select
          key={field.name}
          error={errors.includes(field.name)}
          handleSelect={(value) =>
            handleChangeFormFields(value, setFields, index, fields)
          }
          {...field}
        />
      );
    }
  });
  return <>{components}</>;
};

export default FormRender;

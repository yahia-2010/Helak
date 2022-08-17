const handleChangeFormFields = (
  value: string,
  setFormFields: React.Dispatch<any>,
  index: number,
  formFields: any[]
) => {
  const data = [...formFields];
  data[index].value = value;
  setFormFields(data);
};

export default handleChangeFormFields;

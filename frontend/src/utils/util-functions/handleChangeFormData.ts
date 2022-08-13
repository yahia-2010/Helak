const handleChangeFormData = (
  e: React.ChangeEvent<HTMLInputElement>,
  setData: React.Dispatch<any>
) => {
  const name = e.target.name;
  const value = e.target.value;
  setData((values: any) => ({
    ...values,
    [name]: { value, required: e.target.required },
  }));
};

export default handleChangeFormData;

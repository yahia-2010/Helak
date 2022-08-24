const submitSignUp = (
  data: FormFieldInterface[],
  func: (value: UserInterface) => { res: any; err: any }
): { err: any; res: any } => {
  return { err: null, res: {} };
};

export default submitSignUp;

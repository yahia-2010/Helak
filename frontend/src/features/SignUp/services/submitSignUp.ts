const submitSignUp = (
  data: FormFieldInterface[],
  func: (value: AuthUserInterface) => { res: any; err: any }
): { err: any; res: any } => {
  return { err: null, res: {} };
};

export default submitSignUp;

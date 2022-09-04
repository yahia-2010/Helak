const normalizeString = (str: string) => {
  return str.replace(" ", "_").toLowerCase();
};

export default normalizeString;

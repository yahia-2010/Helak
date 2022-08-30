const nameJoiner = (name: { fName: string; lName: string }) => {
  return `${name?.fName}${name?.lName ? ` ${name?.lName}` : ""}`;
};

export default nameJoiner;

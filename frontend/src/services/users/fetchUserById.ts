import usersMock from "@/mocks/usersMock.json";

const fetchUserById = (
  id: number
): { res: UserInterface | undefined; err: any } => {
  const user: any = usersMock.find((user) => user.id === id);
  return { res: user, err: null };
};

export default fetchUserById;

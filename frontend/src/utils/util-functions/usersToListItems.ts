import nameJoiner from "./nameJoiner";

const usersToListItems = (users: UserInterface[]) => {
  return users?.map((user) => ({
    label: nameJoiner(user.name),
    image: user?.photo,
  }));
};

export default usersToListItems;

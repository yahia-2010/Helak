import React, { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import userMock from "@/mocks/userMock.json";
import { UserCircleIcon } from "@heroicons/react/solid";

const Profile: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const userData = authValues?.data || userMock;

  const name = `${userData.name?.fName} ${userData.name?.lName}`;

  console.log(userData.photo);

  return (
    <section className="p-8">
      <div className="flex w-full items-center gap-x-4">
        {userData.photo ? (
          <img
            src={userData.photo}
            alt={name}
            className="h-72 w-72 rounded-full border-4 border-gray-200 p-6 dark:border-dark-primary"
          />
        ) : (
          <UserCircleIcon className="h-72 w-72" />
        )}
        <h1 className="text-5xl">{name}</h1>
      </div>
      <div className="mt-20 px-12">
        <div className="">
          <h2 className="text-4xl">الحِلَق</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;

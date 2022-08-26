import React, { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import userMock from "@/mocks/userMock.json";
import { UserCircleIcon } from "@heroicons/react/solid";
import List from "@/components/ui/List";

const Profile: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const userData = authValues?.data || userMock;

  const name = `${userData.name?.fName} ${userData.name?.lName}`;

  const defaultListProps: {
    className: string;
    itemBg: {
      dark: {
        default: "primary" | "secondary";
        hover: "primary" | "secondary";
      };
      light: {
        default: "white" | "gray";
        hover: "white" | "gray";
      };
    };
  } = {
    className: "py-4",
    itemBg: {
      dark: { default: "primary", hover: "primary" },
      light: { default: "white", hover: "white" },
    },
  };

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
      <div className="mt-14 px-12">
        <div className="mt-14">
          <h2 className="text-4xl">الحِلَق</h2>
          <List
            {...defaultListProps}
            items={
              userData?.helak?.map((halaka) => ({
                label: halaka.name,
                image: halaka?.image,
                url: `/halaka?id=${halaka.id}`,
              })) || []
            }
          />
        </div>
        <div className="mt-14">
          <h2 className="text-4xl">مقادير الحفظ</h2>
          <List
            {...defaultListProps}
            items={
              userData?.amounts?.map((amount) => ({
                label: `${amount.name} : `,
                label2: `${amount.total}/${amount.finished}`,
              })) || []
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;

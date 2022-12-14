import React, { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { UserCircleIcon } from "@heroicons/react/solid";
import List from "@/components/ui/List";
import { Line } from "react-chartjs-2";
import lineColors from "@/features/Profile/data/lineColors";
import { ChartData } from "chart.js";
import randomColorGenerator from "@/utils/util-functions/randomColorGenerator";

const Profile: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const userData = authValues?.data;
  const [memorizedChartData] = useState<
    ChartData<"line", (number | undefined)[] | undefined, string>
  >({
    labels: userData?.memorized?.map((item) => item.date),
    datasets: userData?.amounts
      ? userData?.amounts?.map((amount, index) => ({
          label: amount.name,
          data:
            userData?.memorized &&
            (userData?.memorized?.length > 0
              ? userData?.memorized?.map(
                  (item) =>
                    item.amounts.find(
                      (itemAmount) => itemAmount.name === amount.name
                    )?.finished
                )
              : []),
          fill: false,
          backgroundColor: `${
            (userData?.amounts as any)?.length <= lineColors.length
              ? lineColors[index]
              : `rgb(${randomColorGenerator()})`
          }`,
          tension: 0.1,
          borderColor: `${
            (userData?.amounts as any)?.length <= lineColors.length
              ? lineColors[index]
              : `rgb(${randomColorGenerator()})`
          }`,
        }))
      : [],
  });

  const name = userData?.name?.fName
    ? `${userData.name?.fName}${
        userData?.name?.lName ? ` ${userData.name?.lName}` : ""
      }`
    : "";

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
    <section className="center flex h-full min-h-screen w-full p-8">
      <div className="w-[97.5%] max-w-[70rem] sm:w-[85%] md:w-[80%]">
        <div className="center mb-24 mt-0 flex w-full sm:mb-12 sm:mt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            {userData.photo ? (
              <img
                src={userData.photo}
                alt={name}
                className="aspect-square w-72 rounded-full border-4 border-gray-200 p-6 dark:border-dark-primary"
              />
            ) : (
              <UserCircleIcon className="aspect-square w-72" />
            )}
            <h1 className="text-5xl">{name}</h1>
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-16 sm:gap-y-20">
          <div>
            <h2 className="text-4xl">??????????????</h2>
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
          <div>
            <h2 className="text-4xl">???????????? ??????????</h2>
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
          <div>
            <h2 className="text-4xl">??????????????</h2>
            <div className="mt-6 h-fit w-full rounded bg-white p-4 dark:bg-dark-primary">
              <Line
                data={memorizedChartData}
                fallbackContent={
                  <div className="center flex h-full w-full">
                    <span className="text-lg">?????????? ?????? ?????????? ??????????????</span>
                  </div>
                }
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl">?????????????????? ??????????????</h2>
            <List
              {...defaultListProps}
              items={
                [
                  {
                    label: "?????????? : ",
                    label2: name,
                  },
                  {
                    label: "?????????? : ",
                    label2: `${userData?.age}`,
                  },
                  {
                    label: "?????????? : ",
                    label2: userData?.gender,
                  },
                  {
                    label: "?????????????? ???????????????? : ",
                    label2: userData?.eduLevel || "?????? ??????????",
                  },
                  {
                    label: "???????????? : ",
                    label2: userData?.country || "?????? ??????????",
                  },
                  {
                    label: "?????????? : ",
                    label2: userData?.language || "?????? ??????????",
                  },
                  {
                    label: "?????? ???????????? : ",
                    label2: userData?.phone || "?????? ??????????",
                  },
                  {
                    label: "???????????? ???????????????????? : ",
                    label2: userData?.email || "?????? ??????????",
                  },
                ] || []
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import React, { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import userMock from "@/mocks/userMock.json";
import { UserCircleIcon } from "@heroicons/react/solid";
import List from "@/components/ui/List";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import randomColorGenerator from "@/utils/util-functions/randomColorGenerator";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Profile: React.FC = () => {
  const { authValues } = useContext(AuthContext);
  const userData = authValues?.data || userMock;
  const [memorizedChartData] = useState<
    ChartData<"line", (number | undefined)[] | undefined, string>
  >({
    labels: userData?.memorized?.map((item) => item.date),
    datasets: userData?.amounts
      ? userData?.amounts?.map((amount) => ({
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
          backgroundColor: `rgb(${randomColorGenerator()})`,
          tension: 0.1,
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
      <div className="px-12">
        <div className="mt-10">
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
        <div className="mt-20">
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
        <div className="mt-20">
          <h2 className="text-4xl">الإنجاز</h2>
          <div className="mt-6 h-fit w-full rounded bg-white p-4 dark:bg-dark-primary">
            <Line
              data={memorizedChartData}
              fallbackContent={
                <div className="center flex h-full w-full">
                  <span className="text-lg">يتعذر عرض الرسم البياني</span>
                </div>
              }
            />
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl">المعلومات الشخصية</h2>
          <List
            {...defaultListProps}
            items={
              [
                {
                  label: "الاسم : ",
                  label2: name,
                },
                {
                  label: "العمر : ",
                  label2: `${userData?.age}`,
                },
                {
                  label: "الجنس : ",
                  label2: userData?.gender,
                },
                {
                  label: "المرحلة الدراسية : ",
                  label2: userData?.eduLevel || "غير متوفر",
                },
                {
                  label: "الدولة : ",
                  label2: userData?.country || "غير متوفر",
                },
                {
                  label: "اللغة : ",
                  label2: userData?.language || "غير متوفر",
                },
                {
                  label: "رقم الهاتف : ",
                  label2: userData?.phone || "غير متوفر",
                },
                {
                  label: "البريد الإلكتروني : ",
                  label2: userData?.email,
                },
              ] || []
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import useErrorModal from "@/hooks/useErrorModal";
import fetchHalakaById from "@/services/helak/fetchHalakaById";
import HalakaDefaultPictureTemp from "@/assets/temp/halaka-default-picture-temp.svg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import List from "@/components/ui/List";
import { Tab, Transition } from "@headlessui/react";
import fetchUserById from "@/services/users/fetchUserById";
import usersToListItems from "@/utils/util-functions/usersToListItems";
import useAutoIdFetcher from "@/hooks/useAutoIdFetcher";
import Card from "@/components/ui/Card";
import normalizeString from "@/utils/util-functions/normalizeString";
import Button from "@/components/Button";
import Tabs from "@/components/ui/Tabs";

const Halaka: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [halakaId] = useState(
    searchParams.get("id")
      ? parseInt(searchParams.get("id") as string)
      : undefined
  );
  const [halaka, setHalaka] = useState<HalakaInterface | undefined>(undefined);
  const [error, setError] = useState<any>(null);
  const [supervisors, setSupervisors] = useState<UserInterface[]>([]);
  const [sheikhs, setSheikhs] = useState<UserInterface[]>([]);
  const [students, setStudents] = useState<UserInterface[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const ErrorModal = useErrorModal(error);
  const location = useLocation();
  const navigate = useNavigate();
  useAutoIdFetcher(
    [
      { IDs: halaka?.supervisors, setter: setSupervisors },
      { IDs: halaka?.sheikhs, setter: setSheikhs },
      { IDs: halaka?.students, setter: setStudents },
    ],
    fetchUserById,
    setError
  );

  useEffect(() => {
    if (!searchParams.get("id")) {
      navigate("/helak");
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (halakaId) {
      const { res, err } = fetchHalakaById(halakaId);
      setError(err);
      setHalaka(res);
    }
  }, []);

  const defaultListProps = {
    className: "py-4",
    itemClassName: "bg-white dark:bg-dark-primary",
  };

  return (
    <section className="center flex h-full min-h-screen w-full p-8">
      <ErrorModal />
      <div className="w-[97.5%] max-w-[70rem] sm:w-[85%] md:w-[80%]">
        <div className="center sm:mb-18 mb-24 mt-0 flex w-full flex-col gap-y-6 sm:mt-6">
          <div
            style={{
              backgroundImage: `url(${
                halaka?.image || HalakaDefaultPictureTemp
              })`,
            }}
            className="aspect-square w-72 rounded-2xl bg-cover bg-no-repeat"
          />
          <h1 className="text-5xl">{halaka?.name}</h1>
          {halaka?.description && (
            <p className="-mt-4">{halaka?.description}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-y-16 sm:gap-y-20">
          <div>
            <h2 className="text-4xl">الأحداث و الإعلانات</h2>
            <div className="thin-scroll mt-5 overflow-x-scroll xs:overflow-auto">
              <Tabs
                tabListClassName="bg-white dark:bg-dark-primary"
                tabClassName="hover:bg-gray-100 dark:hover:bg-dark-secondary"
                panelClassName="bg-white dark:bg-dark-primary"
                tabs={["الأحداث", "الإعلانات", "المدفوعات"]}
                panels={[
                  <div key={0}>
                    {halaka?.events?.map((event, index) => {
                      return (
                        <div key={index} className="">
                          <h3 className="">{event.name}</h3>
                          <div className="">
                            <div className="">
                              <span>يبدأ : </span>
                              <span className="">{event.startDate}</span>
                            </div>
                            <div className="">
                              <span>ينتهي : </span>
                              <span className="">{event.endDate}</span>
                            </div>
                          </div>
                          <Button variant="secondary">اشترك</Button>
                        </div>
                      );
                    })}
                  </div>,
                  <div key={1}></div>,
                  <div key={2}></div>,
                ]}
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl">المشرفين</h2>
            <List {...defaultListProps} items={usersToListItems(supervisors)} />
          </div>
          <div>
            <h2 className="text-4xl">الشيوخ</h2>
            <List {...defaultListProps} items={usersToListItems(sheikhs)} />
          </div>
          <div>
            <h2 className="text-4xl">الطلاب</h2>
            <List {...defaultListProps} items={usersToListItems(students)} />
          </div>
          <div>
            <h2 className="text-4xl">معلومات الحلقة</h2>
            <List
              {...defaultListProps}
              items={[
                { label: "مجانية", label2: halaka?.free ? "نعم" : "لا" },
                { label: "حضورية", label2: !halaka?.online ? "نعم" : "لا" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halaka;

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
              <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                <Tab.List className="flex w-full gap-x-1 rounded bg-white p-1.5 dark:bg-dark-primary xs:w-72">
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded py-2.5 text-sm transition hover:bg-gray-100 dark:hover:bg-dark-secondary xs:text-base ${
                        selected ? "bg-gray-100 dark:bg-dark-secondary" : ""
                      }`
                    }
                  >
                    الإعلانات
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded py-2.5 text-sm transition hover:bg-gray-100 dark:hover:bg-dark-secondary xs:text-base ${
                        selected ? "bg-gray-100 dark:bg-dark-secondary" : ""
                      }`
                    }
                  >
                    الرحلات
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded py-2.5 text-sm transition hover:bg-gray-100 dark:hover:bg-dark-secondary xs:text-base ${
                        selected ? "bg-gray-100 dark:bg-dark-secondary" : ""
                      }`
                    }
                  >
                    الدفع
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-4 min-h-[10rem] w-full rounded bg-white dark:bg-dark-primary">
                  <Transition
                    as={React.Fragment}
                    show={selectedTab === 0}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Tab.Panel>
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
                    </Tab.Panel>
                  </Transition>
                  <Tab.Panel></Tab.Panel>
                  <Tab.Panel></Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
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

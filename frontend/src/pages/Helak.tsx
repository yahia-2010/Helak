import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/Card";
import DropdownMenu from "@/components/DropdownMenu";
import Input from "@/components/forms/Input";
import filters from "@/features/Helak/data/filters";
import fetchHelak from "@/features/Helak/services/fetchHelak";
import useErrorModal from "@/hooks/useErrorModal";
import useSearch from "@/hooks/useSearch";

const Helak: React.FC = () => {
  const [data, setData] = useState<HalakaInterface[]>([]);
  const [error, setError] = useState<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const ErrorModal = useErrorModal(error);
  const [helak, setHelak] = useState<HalakaInterface[]>([]);
  const searchedHelakNames = useSearch(
    searchValue,
    data.map((halaka) => halaka.name)
  );
  const [filter, setFilter] = useState(filters[0]);
  const filterItems: any[] = filters
    .map((filter) => filter.text)
    .map((filter) => ({
      text: filter,
      action: (text: string) =>
        setFilter(filters.find((filter) => filter.text === text) || filters[0]),
    }));

  useEffect(() => setHelak(data), [data]);

  useEffect(() => {
    setHelak(data);
    setHelak((helak) => {
      return helak.filter((halaka) => {
        return searchedHelakNames.current.includes(halaka.name);
      });
    });
  }, [searchValue]);

  useEffect(() => {
    setHelak((helak) => {
      switch (filter.value) {
        case "paid":
          return helak.filter((halaka) => !halaka.free);
        case "free":
          return helak.filter((halaka) => halaka.free);
        case "attended":
          return helak.filter((halaka) => !halaka.online);
        case "online":
          return helak.filter((halaka) => halaka.online);
        default:
          return helak;
      }
    });
  }, [filter]);

  useEffect(() => {
    const { res, err } = fetchHelak();
    setData(res);
    setError(err);
  }, []);

  return (
    <section className="center flex h-full min-h-screen w-full flex-col py-14">
      <ErrorModal />
      <h1 className="mb-[3.75rem] mt-6 text-5xl">حِلَق التحفيظ</h1>
      <div className="mb-4 flex w-full flex-col items-center gap-y-6 px-10 sm:px-12 md:px-40 xs:mb-0 xs:flex-row xs:items-start xs:justify-between">
        <Input
          type="search"
          onChange={setSearchValue}
          value={searchValue}
          className="w-fit bg-white dark:bg-dark-primary"
          label="ابحث عن حلقة"
        />
        <DropdownMenu
          items={filterItems}
          button={filter.text}
          label="إظهار الحلقات"
          buttonClasses="bg-white dark:bg-dark-primary"
          menuItemClasses="pl-8"
        />
      </div>
      <div className="center flex w-full flex-wrap gap-12 p-6 xs:py-10 xs:px-8">
        {helak.map((halaka, index) => {
          return (
            <Card
              key={index}
              title={halaka.name}
              description={halaka.description}
              image={halaka.image}
              url={`/helak/halaka?id=${halaka.id}`}
              className="bg-white dark:bg-dark-primary"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Helak;

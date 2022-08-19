import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import DropdownMenu from "@/components/DropdownMenu";
import Input from "@/components/forms/Input";
import filters from "@/features/Helak/data/filters";
import fetchHelak from "@/features/Helak/services/fetchHelak";

const Helak: React.FC = () => {
  const [data, setData] = useState<HalakaInterface[]>([]);
  const [error, setError] = useState<any>(null);
  const [filter, setFilter] = useState(filters[0]);
  const filterItems: any[] = filters.map((filter) => ({
    text: filter,
    action: (text: string) => setFilter(text),
  }));

  useEffect(() => {
    const { res, err } = fetchHelak();
    setData(res);
    setError(err);
  }, []);

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <section className="center flex h-full min-h-screen w-full flex-col py-14">
      <h1 className="mb-[3.75rem] mt-6 text-5xl">حِلَق التحفيظ</h1>
      <div className="flex w-full items-center justify-between px-40">
        <Input
          type="search"
          onSearch={handleSearch}
          className="w-fit bg-white"
          label="ابحث عن حلقة"
        />
        <DropdownMenu
          items={filterItems}
          button={filter}
          label="إظهار الحلقات :"
          buttonClasses="bg-white"
          menuItemClasses="pl-8"
        />
      </div>
      <div className="center flex w-full flex-wrap gap-12 p-6 xs:py-10 xs:px-8">
        {data.map((halaka, index) => {
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

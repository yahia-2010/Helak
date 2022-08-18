import React, { useEffect, useState } from "react";
import fetchBestHelak from "../../services/fetchBestHelak";
import Card from "@/components/Card";

const Best: React.FC = () => {
  const [data, setData] = useState<HalakaInterface[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const { res, err } = fetchBestHelak();
    setData(res);
    setError(err);
  }, []);

  return (
    <section className="center flex w-full flex-col bg-white py-14 dark:bg-dark-primary">
      <h1 className="mb-12 text-5xl">أفضل ما لدينا</h1>
      <div className="center flex w-full flex-wrap gap-10 p-6 xs:p-10">
        {data.map((halaka, index) => {
          return (
            <Card
              key={index}
              title={halaka.name}
              description={halaka.description}
              image={halaka.image}
              url={`/halakat/halaka?name=${halaka.name}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Best;

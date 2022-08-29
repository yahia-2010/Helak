import React, { useEffect, useState } from "react";
import useErrorModal from "@/hooks/useErrorModal";
import fetchHalaka from "@/services/fetchHalaka";
import HalakaDefaultPictureTemp from "@/assets/temp/halaka-default-picture-temp.svg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import List from "@/components/ui/List";

const Halaka: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [halakaId] = useState(
    searchParams.get("id")
      ? parseInt(searchParams.get("id") as string)
      : undefined
  );
  const [halaka, setHalaka] = useState<HalakaInterface | undefined>(undefined);
  const [error, setError] = useState<any>(null);
  const ErrorModal = useErrorModal(error);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("id")) {
      navigate("/helak");
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (halakaId) {
      const { res, err } = fetchHalaka(halakaId);
      setError(err);
      setHalaka(res);
    }
    console.log("halaka", halaka);
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
            <h2 className="text-4xl">المشرفين</h2>
            <List {...defaultListProps} items={[]} />
          </div>
          <div>
            <h2 className="text-4xl">الشيوخ</h2>
            <List {...defaultListProps} items={[]} />
          </div>
          <div>
            <h2 className="text-4xl">الطلاب</h2>
            <List {...defaultListProps} items={[]} />
          </div>
          <div>
            <h2 className="text-4xl">معلومات الحلقة</h2>
            <List {...defaultListProps} items={[]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halaka;

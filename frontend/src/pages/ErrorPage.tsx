import React, { useContext } from "react";
import FloatingButton from "@/components/FloatingButton";
import { ThemeContext } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import A from "@/components/A";

interface ErrorPageProps {
  status: number;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ status }) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <section className="center flex h-screen w-full">
        <div className="center flex w-full flex-col">
          <h1 className="text-9xl">{status}</h1>
          <p className="">
            {status === 404
              ? "يبدو أن الصفحة التي تبحث عنها غير متوفرة"
              : "حدث خطأ ما"}
          </p>
          <A href="/" className="mt-6 text-[.875rem]">
            العودة إلى الصفحة الرئيسة
          </A>
        </div>
      </section>
      <FloatingButton
        icon={
          theme === "light" ? (
            <MoonIcon className="h-5" />
          ) : (
            <SunIcon className="h-5" />
          )
        }
        action={() => toggleTheme()}
      />
    </>
  );
};

export default ErrorPage;

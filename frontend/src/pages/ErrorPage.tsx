import React from "react";
import A from "@/components/A";

interface ErrorPagePropsInterface {
  status: number;
}

const ErrorPage: React.FC<ErrorPagePropsInterface> = ({ status }) => {
  return (
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
  );
};

export default ErrorPage;

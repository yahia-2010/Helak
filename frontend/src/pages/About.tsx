import React from "react";
import Collapse from "@/components/Collapse";
import questions from "@/features/About/data/questions";
import dummyText from "@/utils/util-data/dummyText";

const About: React.FC = () => {
  return (
    <section className="h-full min-h-screen w-full p-12">
      <h1 className="mb-24 mt-4 text-7xl">حول حِلَق</h1>
      <div className="mb-24 flex h-full w-full flex-col gap-y-20">
        <article className="w-full">
          <h2 className="text-4xl">ما هو حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">{dummyText[20]}</p>
        </article>
        <article className="w-full">
          <h2 className="text-4xl">لماذا أستخدم حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">{dummyText[20]}</p>
        </article>
        <article className="w-full">
          <h2 className="text-4xl">من يقوم بتطوير حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">{dummyText[20]}</p>
        </article>
        <article className="w-full">
          <h2 className="text-4xl">الأسئلة الشائعة</h2>
          <div className="mt-6 flex flex-col gap-y-6">
            {questions.map((question, index) => (
              <Collapse
                key={index}
                {...question}
                className="dark:bg-dark-primary"
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

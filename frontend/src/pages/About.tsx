import React from "react";
import Collapse from "@/components/Collapse";
import questions from "@/features/About/data/questions";
import articles from "@/features/About/data/articles";

const About: React.FC = () => {
  return (
    <section className="center flex h-full min-h-screen w-full py-8 px-6 xs:p-8">
      <div className="w-[97.5%] max-w-fit sm:w-[85%] md:w-[80%]">
        <h1 className="mb-24 mt-12 w-full text-center text-6xl sm:text-start">
          حول حِلَق
        </h1>
        <div className="flex w-full flex-col gap-y-20">
          {articles.map((article, index) => (
            <article key={index} className="w-full">
              <h2 className="text-4xl">{article.title}</h2>
              <p className="mt-4 max-w-xl">{article.content}</p>
            </article>
          ))}
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
      </div>
    </section>
  );
};

export default About;

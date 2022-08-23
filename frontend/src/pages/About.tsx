import React from "react";

const About: React.FC = () => {
  return (
    <section className="h-full min-h-screen w-full p-12">
      <h1 className="mb-24 mt-4 text-6xl">حول حِلَق</h1>
      <div className="mb-24 flex h-full w-full flex-col gap-y-20">
        <article className="w-full">
          <h2 className="text-4xl">ما هو حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam
            sed, harum fugiat temporibus ex totam laboriosam. Eum corrupti
            quisquam assumenda alias numquam explicabo. Quasi?
          </p>
        </article>
        <article className="w-full">
          <h2 className="text-4xl">لماذا أستخدم حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam
            sed, harum fugiat temporibus ex totam laboriosam. Eum corrupti
            quisquam assumenda alias numquam explicabo. Quasi?
          </p>
        </article>
        <article className="w-full">
          <h2 className="text-4xl">من يقوم بتطوير حِلَق؟</h2>
          <p className="mt-4 max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam
            sed, harum fugiat temporibus ex totam laboriosam. Eum corrupti
            quisquam assumenda alias numquam explicabo. Quasi?
          </p>
        </article>

        <article className="w-full">
          <h2 className="text-4xl">الأسئلة الشائعة</h2>
          <p className="mt-4 max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ipsam
            sed, harum fugiat temporibus ex totam laboriosam. Eum corrupti
            quisquam assumenda alias numquam explicabo. Quasi?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

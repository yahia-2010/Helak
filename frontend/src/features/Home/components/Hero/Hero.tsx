import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="center flex w-full flex-col gap-y-12 py-12">
      <div className="center flex flex-col gap-y-9">
        <h1 className="text-8xl">حِلَق</h1>
        <p className="text-xl">مجمع حلقات التحفيظ الإلكتروني</p>
      </div>
      <div className="center flex gap-x-8">
        <Button variant="secondary">أنشئ حسابك</Button>
        <Button>سجل دخولك</Button>
      </div>
    </section>
  );
};

export default Hero;

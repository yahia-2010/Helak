import React from "react";
import Button from "@/components/Button";

const Hero: React.FC = () => {
  return (
    <section className="center flex h-[calc(100vh_-_4rem)] w-full flex-col gap-y-12">
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

import React, { useState } from "react";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import Input from "@/components/forms/Input";
import selections from "@/features/SignUp/data/selections";
import Select from "@/components/forms/Select";
import submitSignUp from "@/features/SignUp/services/submitSignUp";

const SignUp: React.FC = () => {
  const { eduLevels } = selections;
  const [name, setName] = useState({ fName: "", lName: "" });
  const [age, setAge] = useState(1);
  const [eduLevelSelection, setEduLevelSelection] = useState(eduLevels[0]);

  return (
    <CardPage>
      <div className="w-fit">
        <h1 className="mb-12 mt-6 w-full text-center text-3xl">إنشاء حساب</h1>
        <form onSubmit={submitSignUp} className="flex flex-col gap-y-6">
          <div className="flex gap-x-10">
            <Input
              label="الاسم الأول"
              value={name.fName}
              onChange={(e) =>
                setName((n) => {
                  return { fName: e.target.value, lName: n.lName };
                })
              }
            />
            <Input
              label="الاسم الأخير"
              value={name.lName}
              onChange={(e) =>
                setName((n) => {
                  return { lName: e.target.value, fName: n.fName };
                })
              }
            />
          </div>
          <div className="flex gap-x-10">
            <div className="w-full">
              <Input
                type="number"
                min={1}
                label="العمر"
                value={`${age}`}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
            </div>
            <div className="w-full">
              <Select
                handleSelect={setEduLevelSelection}
                label="المرحلة التعليمية"
                value={eduLevelSelection}
                selections={eduLevels}
              />
            </div>
          </div>
        </form>
        <A href="/login" className="mt-5 text-sm">
          تملك حساباً بافعل؟ قم بتسجيل دخولك
        </A>
      </div>
    </CardPage>
  );
};

export default SignUp;

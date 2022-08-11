import React, { useState } from "react";
import handleChangeFormData from "@/utils/util-functions/handleChangeFormData";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import Input from "@/components/forms/Input";
import selections from "@/features/SignUp/data/selections";
import Select from "@/components/forms/Select";
import submitSignUp from "@/features/SignUp/services/submitSignUp";
import Button from "@/components/Button";
import Radio from "@/components/forms/Radio";

const SignUp: React.FC = () => {
  const { eduLevels, langs, countries } = selections;
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    age: 1,
    eduLevel: eduLevels[0],
    gender: "male",
    language: langs[0],
    country: countries[0],
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeFormData(e, setFormData);
    console.log(formData);
  };

  return (
    <CardPage className="my-14">
      <div className="w-fit">
        <h1 className="mb-12 mt-6 w-full text-center text-3xl">إنشاء حساب</h1>
        <form
          onSubmit={(e) => submitSignUp(e, formData)}
          className="flex flex-col gap-y-6 px-2"
        >
          <div className="flex gap-x-10">
            <Input
              label="الاسم الأول"
              value={formData.fName}
              onChange={handleChange}
              name="fName"
            />
            <Input
              label="الاسم الأخير"
              value={formData.lName}
              onChange={handleChange}
              name="lName"
            />
          </div>
          <div className="flex gap-x-10">
            <div className="w-full">
              <Input
                type="number"
                min={1}
                label="العمر"
                value={`${formData.age}`}
                onChange={(e) =>
                  setFormData((values) => ({
                    ...values,
                    age: parseInt(e.target.value),
                  }))
                }
                name="age"
              />
            </div>
            <div className="w-full">
              <Select
                handleSelect={(value) =>
                  setFormData((values) => ({ ...values, eduLevel: value }))
                }
                label="المرحلة التعليمية"
                value={formData.eduLevel}
                selections={eduLevels}
              />
            </div>
          </div>
          <div>
            <Radio
              label="الجنس"
              handleSelect={(value) =>
                setFormData((values) => ({ ...values, gender: value }))
              }
              options={["ذكر", "أنثى"]}
              values={["male", "female"]}
              value={formData.gender}
            />
          </div>
          <div className="flex gap-x-10">
            <Select
              handleSelect={(value) =>
                setFormData((values) => ({ ...values, language: value }))
              }
              label="اللغة"
              value={formData.language}
              selections={langs}
            />
            <Select
              handleSelect={(value) =>
                setFormData((values) => ({ ...values, country: value }))
              }
              label="الدولة"
              value={formData.country}
              selections={countries}
            />
          </div>
          <div className="flex gap-x-10">
            <Input
              label="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              label="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className="flex gap-x-10">
            <Input
              label="كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              name="password"
              type="password"
            />
            <Input
              label="تأكيد كلمة المرور"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type="password"
            />
          </div>
          <Button variant="secondary" type="submit" className="mt-6 w-fit">
            إنشاء حساب
          </Button>
        </form>
        <A href="/login" className="mt-5 text-sm">
          تملك حساباً بالفعل؟ قم بتسجيل دخولك
        </A>
      </div>
    </CardPage>
  );
};

export default SignUp;

import React, { useEffect, useRef, useState } from "react";
import handleChangeFormData from "@/utils/util-functions/handleChangeFormData";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import Input from "@/components/forms/Input";
import selections from "@/features/SignUp/data/selections";
import formFieldsData from "@/features/SignUp/data/formFields";
import Select from "@/components/forms/Select";
import Button from "@/components/Button";
import Radio from "@/components/forms/Radio";

const SignUp: React.FC = () => {
  const { eduLevels, langs, countries } = selections;
  const [formFields, setFormFields] = useState<any>([...formFieldsData]);
  const { response, dataError, reqError, submit } = useSubmitSignUp(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeFormData(e, setFormData);
    console.log(formData);
  };

  return (
    <CardPage className="my-14">
      <div className="w-fit">
        <h1 className="mb-12 mt-6 w-full text-center text-3xl">إنشاء حساب</h1>
        <form
          className="flex flex-col gap-y-6 px-2"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="flex gap-x-10">
            <Input
              label="الاسم الأول"
              value={formData.fName.value}
              onChange={handleChange}
              name="fName"
              error={dataError.includes("fName")}
              required={formData.fName.required}
            />
            <Input
              label="الاسم الأخير"
              value={formData.lName.value}
              onChange={handleChange}
              name="lName"
              error={dataError.includes("lName")}
              required={formData.lName.required}
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
                    age: {
                      value: parseInt(e.target.value),
                      required: e.target.required,
                    },
                  }))
                }
                name="age"
                error={dataError.includes("age")}
                required={formData.age.required}
              />
            </div>
            <div className="w-full">
              <Select
                handleSelect={(value) =>
                  setFormData((values) => ({
                    ...values,
                    eduLevel: { value, required: false },
                  }))
                }
                label="المرحلة التعليمية"
                value={formData.eduLevel.value}
                selections={eduLevels}
              />
            </div>
          </div>
          <div>
            <Radio
              label="الجنس"
              handleSelect={(value) =>
                setFormData((values) => ({
                  ...values,
                  gender: { value: value as Gender, required: true },
                }))
              }
              options={["ذكر", "أنثى"]}
              values={["male", "female"]}
              value={formData.gender.value}
            />
          </div>
          <div className="flex gap-x-10">
            <Select
              handleSelect={(value) =>
                setFormData((values) => ({
                  ...values,
                  language: { value, required: false },
                }))
              }
              label="اللغة"
              value={formData.language.value}
              selections={langs}
            />
            <Select
              handleSelect={(value) =>
                setFormData((values) => ({
                  ...values,
                  country: { value, required: false },
                }))
              }
              label="الدولة"
              value={formData.country.value}
              selections={countries}
            />
          </div>
          <div className="flex gap-x-10">
            <Input
              label="البريد الإلكتروني"
              value={formData.email.value}
              onChange={handleChange}
              name="email"
              error={dataError.includes("email")}
              required={formData.email.required}
            />
            <Input
              label="رقم الهاتف"
              value={formData.phone.value}
              onChange={handleChange}
              name="phone"
              error={dataError.includes("phone")}
              required={formData.phone.required}
            />
          </div>
          <div className="flex gap-x-10">
            <Input
              label="كلمة المرور"
              value={formData.password.value}
              onChange={handleChange}
              name="password"
              type="password"
              required={formData.password.required}
              error={dataError.includes("password")}
            />
            <Input
              label="تأكيد كلمة المرور"
              value={formData.confirmPassword.value}
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              required={formData.confirmPassword.required}
              error={dataError.includes("confirmPassword")}
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

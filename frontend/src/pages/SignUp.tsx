/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import Button from "@/components/Button";
import formFieldsData from "@/features/SignUp/data/formFields";
import useSignUpSubmit from "@/features/SignUp/hooks/useSignUpSubmit";
import FormRender from "@/utils/util-components/FormRender";

const SignUp: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFieldInterface[]>([
    ...formFieldsData,
  ]);
  const { response, dataErrors, reqError, submit, checkFields } =
    useSignUpSubmit(formFields);

  return (
    <CardPage>
      <div className="w-full xs:w-[22rem]">
        <h1 className="center-title">إنشاء حساب</h1>
        <form
          className="flex flex-col gap-y-6 px-2"
          onSubmit={(e) => {
            e.preventDefault();
            checkFields();
            submit();
          }}
        >
          <div className="flex flex-col gap-y-4">
            <FormRender
              fields={formFields}
              setFields={setFormFields}
              errors={dataErrors}
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

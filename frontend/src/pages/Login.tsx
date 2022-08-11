import React, { useState } from "react";
import Input from "@/components/forms/Input";
import Button from "@/components/Button";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import submitLogin from "@/features/Login/services/submitLogin";
import handleChangeFormData from "@/utils/util-functions/handleChangeFormData";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChangeFormData(e, setFormData);

  return (
    <CardPage>
      <div className="w-72">
        <h1 className="mb-12 mt-6 w-full text-center text-3xl">تسجيل الدخول</h1>
        <form
          onSubmit={(e) => submitLogin(e, formData)}
          className="flex flex-col gap-y-6"
        >
          <Input
            label="اسم المستخدم"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
          <Input
            label="كلمة المرور"
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          <Button className="mt-6 w-full" variant="secondary" type="submit">
            تسجيل
          </Button>
        </form>
        <A href="/signup" className="mt-5 text-sm">
          لا تملك حساباً؟ أنشئ واحداً
        </A>
      </div>
    </CardPage>
  );
};

export default Login;

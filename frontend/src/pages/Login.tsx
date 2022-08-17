import React, { useState } from "react";
import Input from "@/components/forms/Input";
import Button from "@/components/Button";
import A from "@/components/A";
import CardPage from "@/components/templates/CardPage";
import submitLogin from "@/features/Login/services/submitLogin";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <CardPage>
      <div className="w-full xs:w-[18rem]">
        <h1 className="center-title">تسجيل الدخول</h1>
        <form
          onSubmit={(e) => submitLogin(e, formData)}
          className="flex flex-col gap-y-6 px-2"
        >
          <Input
            label="اسم المستخدم"
            value={formData.username}
            onChange={(value) =>
              setFormData((fields) => ({ ...fields, username: value }))
            }
            name="username"
          />
          <Input
            label="كلمة المرور"
            type="password"
            value={formData.password}
            onChange={(value) =>
              setFormData((fields) => ({ ...fields, password: value }))
            }
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

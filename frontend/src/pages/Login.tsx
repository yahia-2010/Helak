import React, { useState } from "react";
import Input from "@/components/forms/Input";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="center flex h-full min-h-[calc(100vh-3.75rem)] w-full">
      <div className="h-fit w-64 rounded bg-white p-4 shadow-md dark:bg-dark-primary">
        <h1 className="mb-12 mt-2 w-full text-center text-3xl">تسجيل الدخول</h1>
        <div className="">
          <form className="">
            <Input
              label="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="كلمة المرور"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button className="" type="submit">
            تسجيل
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;

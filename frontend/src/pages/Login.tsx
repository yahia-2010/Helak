import React, { useState } from "react";
import Input from "@/components/forms/Input";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full h-full min-h-[calc(100vh-3.75rem)] flex center">
      <div className="bg-white dark:bg-dark-primary shadow-md rounded p-4">
        <h1 className="">تسجيل الدخول</h1>
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
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import Input from "@/components/forms/Input";
import Button from "@/components/Button";
import { ThemeContext } from "@/contexts/ThemeContext";
import FloatingButton from "@/components/FloatingButton";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import A from "@/components/A";

const Login: React.FC = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // todo : implement submit functionality
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <section className="center flex h-full min-h-screen w-full">
        <div className="h-fit w-72 rounded bg-white p-5 shadow-md dark:bg-dark-primary">
          <h1 className="mb-12 mt-2 w-full text-center text-3xl">
            تسجيل الدخول
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col gap-y-6">
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
            <Button className="mt-6 w-full" variant="secondary" type="submit">
              تسجيل
            </Button>
          </form>
          <A href="/signup" className="mt-5 text-sm">
            لا تملك حساباً؟ أنشئ واحداً
          </A>
        </div>
      </section>
      <FloatingButton
        icon={
          theme === "light" ? (
            <MoonIcon className="h-5" />
          ) : (
            <SunIcon className="h-5" />
          )
        }
        action={() => toggleTheme()}
      />
    </>
  );
};

export default Login;

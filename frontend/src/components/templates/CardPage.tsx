import React from "react";

const CardPage: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <section className="center flex h-full min-h-screen w-full">
      <div
        className={`${
          className || ""
        } center m-0 flex h-full min-h-screen w-full rounded-none bg-white p-5 shadow-md dark:bg-dark-primary xs:my-14 xs:h-fit xs:min-h-fit xs:w-fit xs:rounded`}
      >
        {children}
      </div>
    </section>
  );
};

export default CardPage;

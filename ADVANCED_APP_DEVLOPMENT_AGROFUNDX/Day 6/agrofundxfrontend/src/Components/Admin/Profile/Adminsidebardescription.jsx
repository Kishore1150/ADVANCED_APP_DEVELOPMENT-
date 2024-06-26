import React from "react";

export const Adminsidebardescription = ({ name }) => {
  return (
    <main>
      <section className="xl:h-[20em] w-full lg:w-screen  bg-white">
        <div className="  xl:pt-48 xl:pl-24 lg:pl-10 lg:pt-32 lg:pb-12 ">
          <p className="text-[40px]   text-darkteal  font-bold font-ambitextrabold">
            {name}
          </p>
        </div>
      </section>
    </main>
  );
};

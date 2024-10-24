import React from "react";
import Header from "@components/modules/hearder";
import { Outlet } from "react-router-dom";

const PrimaryLayout = () => {
  return (
    <div className="flex flex-col justify-center w-full max-w-[1434px] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default PrimaryLayout;

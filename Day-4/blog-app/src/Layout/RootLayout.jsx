import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-full mt-10 px-4 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

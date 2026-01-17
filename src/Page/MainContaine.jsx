import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainContaine = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainContaine;

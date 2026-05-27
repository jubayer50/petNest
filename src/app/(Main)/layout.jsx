import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>{children}</div>
    </div>
  );
};

export default MainLayout;

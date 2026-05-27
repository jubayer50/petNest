import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <body>
      <Navbar></Navbar>

      <main>{children}</main>
    </body>
  );
};

export default MainLayout;

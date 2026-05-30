import Footer from "@/Components/Footer/Footer";
import FeaturedSection from "@/Components/HomePage/FeaturedSection/FeaturedSection";
import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>{children}</div>

      <FeaturedSection></FeaturedSection>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

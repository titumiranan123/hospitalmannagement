import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/ShareComponent/Navbar";
import Footer from "../component/ShareComponent/Footer";

const Main: React.FC = () => {
  return (
    <body className="max-w-[1340px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
};

export default Main;

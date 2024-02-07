/** @format */

import React from "react";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <React.Fragment>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </React.Fragment>
    </div>
  );
};

export default Layout;

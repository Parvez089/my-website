/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=' flex mb-5 flex-col justify-center items-center  bottom-0   mt-16 '>
      <div>
        <h1 className='text-3xl font-bold text-white'>Parvez</h1>
      </div>
      <div className='mt-4 flex flex-row gap-8 text-xl font-semibold text-white'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/work"}>Work</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div>
        © All rights reserved by{" "}
        <span className='text-blue-500'>MH Parvez</span>{" "}
      </div>
    </div>
  );
};

export default Footer;

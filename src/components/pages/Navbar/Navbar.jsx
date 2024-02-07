/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between '>
      <div>
        <h1 className='text-2xl font-semibold text-white'>Parvez</h1>
      </div>
      <div className='flex gap-12 text-xl  font-semibold text-white'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/works"}>Work</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      {/* <div className='flex flex-row justify-center items-center text-center gap-12 text-xl md:visible font-semibold text-white'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Work</Link>
        <Link>Contact</Link>
      </div> */}
      <div className='bg-slate-100 rounded-lg pl-8 pr-8 text-black font-semibold text-xl'>
        <button>Let's Works</button>
      </div>
    </div>
  );
};

export default Navbar;

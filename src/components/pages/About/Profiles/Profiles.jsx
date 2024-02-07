/** @format */

import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Profiles = () => {
  return (
    <div className='w-[283px] h-[220px] bg-[#1f1f1f]  pt-4 pl-4 rounded-lg'>
      <div className='flex flex-row justify-center rounded-2xl gap-8 bg-[#2d2a2a] w-[250px] h-[80px]'>
        {/* 3 icon  */}

        <FaFacebook className='text-4xl mt-5 text-white' />
        <FaLinkedin className='text-4xl mt-5 text-white' />
        <FaGithub className='text-4xl mt-5 text-white' />
      </div>
      <div>
        <div className='mt-8 ml-2'>
          <h1 className='font-semibold'>Stay with me</h1>
        </div>
        <div className='flex flex-row justify-between  ml-2 mr-2'>
          <h1 className='text-2xl font-semibold text-white'>Profiles</h1>
          <FaRegArrowAltCircleRight className='text-2xl font-semibold text-white' />
        </div>
      </div>
    </div>
  );
};

export default Profiles;

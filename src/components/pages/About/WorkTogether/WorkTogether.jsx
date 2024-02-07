/** @format */

import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const WorkTogether = () => {
  return (
    <div className='w-[565px] h-[230px] bg-[#1f1f1f] rounded-lg  pt-4 pl-4 '>
      <div className='mt-8'>
        <FaCodeBranch className='text-white text-4xl' />
      </div>
      <div className='mt-12 flex flex-row justify-between'>
        <div>
          <h1
            className='text-3xl font-bold text-white
          '>
            Let's
          </h1>
          <h1 className='font-semibold text-2xl'>
            Work <span className='text-blue-500'>Together</span>{" "}
          </h1>
        </div>
        <div>
          <FaRegArrowAltCircleRight className='text-4xl mr-4 text-white mt-8' />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;

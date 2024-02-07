/** @format */

import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdMonitor } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const ServiceOffering = () => {
  return (
    <section>
      <div className='w-[551px] h-[220px] bg-[#1f1f1f] rounded-lg'>
        <div className='flex text-4xl flex-row justify-center items-center gap-16 '>
          {/* 3 icon */}
          <MdOutlinePhotoCamera className='mt-8 text-white' />
          <MdMonitor className='mt-8 text-white' />
          <FaCode className='mt-8 text-white' />
        </div>
        <div className='ml-4 mt-14'>
          <p>SPECIALIZATION</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h1 className='text-2xl font-bold text-white  ml-4'>
            Service Offering
          </h1>
          <FaRegArrowAltCircleRight className='mt-2 mr-4 text-2xl' />
        </div>
      </div>
    </section>
  );
};

export default ServiceOffering;

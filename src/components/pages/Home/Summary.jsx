/** @format */

import React from "react";
import { FaCodeMerge } from "react-icons/fa6";

const Summary = () => {
  return (
    <div className='md::flex md:flex-row g-10 flex flex-col  '>
      {/* image */}
      <div className='md:w-[350px] md:h-[271px]'>
        <img src='' alt='Img' />
      </div>

      {/* summary */}
      <div className='md:w-[820px] md:h-[271px] w-[370px]  flex flex-col gap-4'>
        <div className='md:w-[820px] ml-4 md::h-[89px] bg-[#1f1f1f] rounded-lg'>
          <h1 className='text-2xl uppercase text-center font-bold tracking-wider text-white p-5'>
            SELF-Summary
          </h1>
        </div>
        <div className='flex flex-col gap-4 md:w-[820px] w-[370px] ml-4  p-5 bg-[#1f1f1f] rounded-xl '>
          <FaCodeMerge className='text-2xl' />
          <h1 className='font-bold text-2xl text-white'>MH Parvez</h1>
          <article className='text-justify text-xl'>
            I am a Bangladesh-based product designer with a focus on web design,
            illustration, a visual development. I have a diverse range of
            experience having worked across various fields and industries.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Summary;

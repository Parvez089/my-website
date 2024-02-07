/** @format */

import React from "react";
import img from "../../../../image/photo.png";

const IntroInfo = () => {
  return (
    <section>
      <div className='flex flex-row gap-4 bg-[#1f1f1f] w-[590px] h-[310px] pt-4 pl-4 mt-12 rounded-lg'>
        <div className='mt-4'>
          <img
            className='w-[200px] h-[200px] border-2 bg-slate-300'
            src=''
            alt='Img'
          />
        </div>
        <div className='flex flex-col mt-7'>
          <p>A web Developer</p>
          <h1 className='font-bold text-2xl text-white mt-4'>MH</h1>
          <h1 className='font-bold text-2xl text-white'>Parvez</h1>
          <p className='font-semibold mt-4'>
            I am a Web Developer base in Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroInfo;

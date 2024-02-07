/** @format */

import React from "react";

const TotalTime = () => {
  return (
    <section>
      <div className='w-[590px] h-[230px] bg-[#1f1f1f] rounded-xl flex flex-row justify-center items-center'>
        <div className='w-[152px] h-[200px] bg-[#2d2a2a] rounded-lg p-4 m-4'>
          <h1 className='text-center text-4xl font-bold text-white mt-4'>
            02<span className='text-[#A6ADBB]'>+</span>
          </h1>
          <p className='mt-12 text-center font-semibold text-lg uppercase'>
            Year
          </p>
          <p className='text-center font-semibold text-lg uppercase'>
            Experience
          </p>
        </div>

        {/* 2 */}
        <div className='w-[152px] h-[200px] bg-[#2d2a2a] rounded-lg p-4 m-4'>
          <h1 className='text-center text-4xl font-bold text-white mt-4'>
            25<span className='text-[#A6ADBB]'>+</span>
          </h1>
          <p className='mt-12 text-center font-semibold text-lg uppercase'>
            clients
          </p>
          <p className='text-center font-semibold text-lg uppercase'>
            Experience
          </p>
        </div>

        {/* 3 */}
        <div className='w-[152px] h-[200px] bg-[#2d2a2a] rounded-lg p-4 m-4'>
          <h1 className='text-center text-4xl font-bold text-white mt-4'>
            60<span className='text-[#A6ADBB]'>+</span>
          </h1>
          <p className='mt-12 text-center font-semibold text-lg uppercase'>
            Total
          </p>
          <p className='text-center font-semibold text-lg uppercase'>Project</p>
        </div>
      </div>
    </section>
  );
};

export default TotalTime;

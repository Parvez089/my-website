/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Feature = () => {
  return (
    <section className='mt-12'>
      <div className='bg-[#1f1f1f] p-4 rounded-lg w-[561px] h-[60px]'>
        <h1>My Feature . My Feature . My Feature . My Feature</h1>
      </div>

      <div className='flex flex-row gap-6'>
        {/* Resume section  */}
        <div className='flex flex-row gap-4'>
          <div className='w-[268px] h-[230px] bg-[#1f1f1f] mt-5 rounded-lg'>
            <div>
              <div className='flex flex-col justify-center items-center mt-2'>
                <h1 className='uppercase font-bold text-xl text-white'>
                  My Resume
                </h1>
                <img
                  className='mt-2 w-[135px] h-[88px] bg-slate-300'
                  src=''
                  alt='Img'
                />
              </div>

              <h4 className=' font-bold ml-5 mt-3 uppercase'>About Me</h4>
              <div className='flex flex-row mr-5 ml-5 justify-between '>
                <button>
                  <Link className='text-xl font-bold text-white'>Resume</Link>
                </button>
                <FaRegArrowAltCircleRight className='text-xl text-white mt-2' />
              </div>
            </div>
          </div>
        </div>

        {/* Work section  */}
        <div className='flex flex-row gap-4'>
          <div className='w-[268px] h-[230px] bg-[#1f1f1f] mt-5 rounded-lg'>
            <div>
              <div className='flex flex-col justify-center items-center mt-2'>
                <h1 className='uppercase font-bold text-xl text-white'>
                  My Works
                </h1>
                <img
                  className='mt-2 w-[135px] h-[88px] bg-slate-300'
                  src=''
                  alt='Img'
                />
              </div>

              <h4 className=' font-bold ml-5 mt-3 uppercase'>Showcase</h4>
              <div className='flex flex-row mr-5 ml-5 justify-between '>
                <button>
                  <Link className='text-xl font-bold text-white'>Project</Link>
                </button>
                <FaRegArrowAltCircleRight className='text-xl text-white mt-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

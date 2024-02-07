/** @format */

import React from "react";
import { GrNotes } from "react-icons/gr";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Blog = () => {
  return (
    <section>
      <div className='w-[272px] h-[220px] bg-[#1f1f1f] rounded-xl flex flex-col '>
        <div className='flex flex-row justify-center items-center'>
          <GrNotes className=' text-yellow-300 text-5xl mt-8' />
        </div>

        <div className='flex flex-row justify-between mt-16'>
          <h1 className='text-2xl font-bold uppercase ml-4 text-white'>Blog</h1>
          <FaRegArrowAltCircleRight className='text-3xl mr-4 mt-2' />
        </div>
      </div>
    </section>
  );
};

export default Blog;

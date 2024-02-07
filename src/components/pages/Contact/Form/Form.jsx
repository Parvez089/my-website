/** @format */

import React from "react";

const Form = () => {
  return (
    <section className='md:w-[765px] md:h-[581px] w-[370px] flex flex-col bg-[#1f1f1f] rounded-xl'>
      <div>
        <div>
          <div>
            <h1 className='md:text-4xl text-xl font-bold p-4 mt-4 '>
              Let's work together
            </h1>
          </div>
          <div></div>
        </div>

        {/* section 2 */}
        <div className='md:w-[705px] md:h-[415px] w-[370px] p-4 mt-8'>
          <form className='flex flex-col gap-3 '>
            <input
              className='md:w-[705px] h-[43px] rounded-xl pl-3 text-xl'
              type='text'
              name=''
              id=''
              placeholder='Name*'
            />
            <input
              className='md:w-[705px] h-[43px] rounded-xl pl-3 text-xl'
              type='email'
              name=''
              id=''
              placeholder='Email*'
            />
            <input
              className='md:w-[705px] h-[43px] rounded-xl pl-3 text-xl'
              type='text'
              name=''
              id=''
              placeholder='Your Subject'
            />
            <input
              className='md:w-[705px] h-[150px] rounded-xl pl-3 text-xl'
              type='text'
              name=''
              id=''
              placeholder='Text Here'
            />
            <button
              className='outline-none mt-8 border-none rounded-lg bg-[#3B3B3B] md:w-[705px] h-[43px]'
              type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

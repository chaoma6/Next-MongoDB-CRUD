import React from 'react';

const page = () => {
  return (
    <>
      <form className='flex flex-col gap-3'>
        <input
          type='text'
          className='border boder-slate-500 px-8 py-2'
          placeholder='Topic text'
        />

        <input
          type='text'
          className='border boder-slate-500 px-8 py-2'
          placeholder='Topic Description'
        />

        <button className='bg-green-600 text-white font-bold py-3 px-6 w-fit'>
          Add Topic
        </button>
      </form>
    </>
  );
};

export default page;

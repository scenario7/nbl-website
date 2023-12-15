import React from 'react'

const CustomFooter = () => {
  return (
    <div className='bg-[#101010] w-full px-5 py-5 flex flex-col space-y-5 items-center'>
        <h1 className='text-white font-lexend text-3xl font-semibold'>Chase glory</h1>
        <h1 className='text-stone-400 font-lexend text-lg font-normal'>Come win the NBL trophy with your friends</h1>
        <button className='bg-red-600 rounded-lg px-2 py-2 text-white font-lexend hover:text-white hover:bg-red-600 hover:outline hover:outline-white hover:-outline-offset-0 transition ease-in-out'>
                Arrange a call back
        </button>
    </div>
  )
}

export default CustomFooter
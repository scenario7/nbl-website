import React from 'react'
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <div className='bg-white px-5 py-5 flex flex-col items-start'>
        <img src={logo} alt="" className='h-16'/>
        <h1 className='font-regular font-lexend'>Namma Bengaluru League</h1>
        <h1 className='font-regular font-lexend'>ನಮ್ಮ ಬೆಂಗಳೂರು ಲೀಗ್</h1>
        <div className="flex items-center pt-3 space-x-6">
            <a href="">
                <button className='bg-white px-2 py-2 rounded-full hover:font-normal text-red-600 transition-colors ease-in-out hover:text-white hover:bg-red-600 outline-offset-0'>
                    Teams
                </button>
            </a>
            <a href="">
                <button className='bg-white px-2 py-2 rounded-full hover:font-normal text-red-600 transition-colors ease-in-out hover:text-white hover:bg-red-600 outline-offset-0'>
                    Matches
                </button>
            </a>
            <a href="">
                <button className='bg-white px-2 py-2 rounded-full hover:font-normal text-red-600 transition-colors ease-in-out hover:text-white hover:bg-red-600 outline-offset-0'>
                    Register
                </button>
            </a>
        </div>
    </div>
  )
}

export default NavBar
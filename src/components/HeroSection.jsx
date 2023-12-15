import React from 'react'

const HeroSection = () => {
  return (
   <div className="relative flex items-center  bg-[url('https://d26itsb5vlqdeq.cloudfront.net//image/B5C3D15B-0407-167F-51E00AB4B55D258C')] h-96 w-full bg-cover">
        <div className="bg-gradient-to-r from-red-600 to-transparent h-full w-full"></div>
        <div className="absolute px-5 py-5 flex flex-col space-y-8">
            <h1 className='text-white font-bold text-4xl font-lexend text-left'>Bangalore's Biggest Supporters League</h1>
            <button className='bg-white rounded-lg px-2 py-2 w-32 text-red-600 font-lexend hover:text-white hover:bg-red-600 hover:outline hover:outline-white hover:-outline-offset-0 transition ease-in-out'>
                Find Out More
            </button>
        </div>
   </div>
  )
}

export default HeroSection
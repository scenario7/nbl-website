import React from 'react'

const MatchCard = ({home, away, homeScore, awayScore, homeIcon, awayIcon}) => {


  return (
    <div className='bg-[#101010] hover:shadow-lg hover:bg-red-600 transition ease-in-out hover:shadow-red-600 flex px-4 py-5 rounded-lg'>
        <div className="flex text-white items-center justify-between w-full">
            <div className="flex flex-col items-center">
                <img src={homeIcon} alt="" className='h-10'/>
                <h1 className='font-lexend text-3xl'>{homeScore}</h1>
                <h1 className='text-xs'>{home}</h1>
            </div>
            <h1>-</h1>
            <div className="flex flex-col items-center">
                <img src={awayIcon} alt="" className='h-10'/>
                <h1 className='font-lexend text-3xl'>{awayScore}</h1>
                <h1 className='text-xs'>{away}</h1>
            </div>
        </div>

    </div>
  )
}

export default MatchCard
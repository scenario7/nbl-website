import React from 'react'

const TeamPoints = () => {


    const points = [
        {
            team : 'Manchester City',
            won : 6,
            lost : 2,
            draw : 0,
            points : 18
        },
        {
            team : 'Real Madrid',
            won : 4,
            lost : 4,
            draw : 0,
            points : 12
        },
        {
            team : 'Barcelona',
            won : 3,
            lost : 4,
            draw : 1,
            points : 10
        },
        {
            team : 'Liverpool',
            won : 2,
            lost : 3,
            draw : 3,
            points : 9
        },
        {
            team : 'FC Bayern',
            won : 5,
            lost : 2,
            draw : 0,
            points : 15
        },
        {
            team : 'AC Milan',
            won : 5,
            lost : 2,
            draw : 1,
            points : 16
        },
        {
            team : 'PSG',
            won : 1,
            lost : 4,
            draw : 3,
            points : 3
        },
        {
            team : 'Chelsea',
            won : 1,
            lost : 7,
            draw : 0,
            points : 3
        }
    ]

    points.sort((a,b) => b.points - a.points)

  return (
    <div className='flex flex-col items-center space-y-3 w-full'>
        <div className='flex  justify-between w-full px-3 py-2 rounded-full text-black font-lexend font-semibold'>
         <h1 className='font-normal'>Team</h1>
         <h1 className='font-normal'>PTS</h1>
        </div>
        <div className='flex justify-between w-full bg-red-600 shadow-md outline outline-red-600 shadow-red-600 shadow-red-600 px-3 py-2 rounded-full text-white font-lexend font-semibold'>
         <h1>{points[0].team}</h1>
         <h1 className='font-normal'>{points[0].points}</h1>
        </div>
        <div className='flex flex-col space-y-3 w-full'>
            {points.slice(1).map((team) => {
                return(
                    <div className='flex justify-between w-full bg-white outline outline-red-600 shadow-red-600 px-3 py-2 rounded-full text-red-600 font-lexend font-semibold'>
                        <h1>{team.team}</h1>
                        <h1 className='font-normal'>{team.points}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TeamPoints
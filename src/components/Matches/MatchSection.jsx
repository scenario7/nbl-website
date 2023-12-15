import React from 'react'
import MatchCard from './MatchCard'

const MatchSection = () => {

    const matches = [
        // Round 1
        { 
            home: 'Man City', 
            away: 'Real Madrid', 
            homeScore: 2, 
            awayScore: 1, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png'
        },
        { 
            home: 'Barcelona', 
            away: 'Liverpool', 
            homeScore: 3, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png'
        },
        { 
            home: 'FC Bayern', 
            away: 'AC Milan', 
            homeScore: 1, 
            awayScore: 0, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg/2048px-Logo_FC_Bayern_München_%282002–2017%29.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png'
        },
        { 
            home: 'PSG', 
            away: 'Chelsea', 
            homeScore: 2, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png'
        },
    
        // Round 2
        { 
            home: 'Man City', 
            away: 'Barcelona', 
            homeScore: 2, 
            awayScore: 0, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png'
        },
        { 
            home: 'Real Madrid', 
            away: 'FC Bayern', 
            homeScore: 1, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg/2048px-Logo_FC_Bayern_München_%282002–2017%29.svg.png'
        },
        { 
            home: 'Liverpool', 
            away: 'PSG', 
            homeScore: 1, 
            awayScore: 3, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png'
        },
        { 
            home: 'AC Milan', 
            away: 'Chelsea', 
            homeScore: 0, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png'
        },
    
        // Round 3
        { 
            home: 'Man City', 
            away: 'FC Bayern', 
            homeScore: 3, 
            awayScore: 1, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg/2048px-Logo_FC_Bayern_München_%282002–2017%29.svg.png'
        },
        { 
            home: 'Barcelona', 
            away: 'AC Milan', 
            homeScore: 2, 
            awayScore: 0, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png'
        },
        { 
            home: 'Real Madrid', 
            away: 'PSG', 
            homeScore: 1, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png'
        },
        { 
            home: 'Liverpool', 
            away: 'Chelsea', 
            homeScore: 2, 
            awayScore: 1, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png'
        },
    
        // Round 4
        { 
            home: 'Man City', 
            away: 'PSG', 
            homeScore: 3, 
            awayScore: 2, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/2048px-Manchester_City_FC_badge.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/240px-Paris_Saint-Germain_Logo.svg.png'
        },
        { 
            home: 'Barcelona', 
            away: 'Chelsea', 
            homeScore: 1, 
            awayScore: 1, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/4/47/FC_Barcelona_%28crest%29.svg/1010px-FC_Barcelona_%28crest%29.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/c/cc/Chelsea_FC.svg/1024px-Chelsea_FC.svg.png'
        },
        { 
            home: 'Real Madrid', 
            away: 'Liverpool', 
            homeScore: 2, 
            awayScore: 0, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/sco/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png'
        },
        { 
            home: 'FC Bayern', 
            away: 'AC Milan', 
            homeScore: 1, 
            awayScore: 0, 
            homeIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg/2048px-Logo_FC_Bayern_München_%282002–2017%29.svg.png',
            awayIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1306px-Logo_of_AC_Milan.svg.png'
        },
    ];
    
    console.log(matches);
    

  return (
    <div className='flex flex-col px-5 py-5 items-start w-full space-y-4'>
        <h1 className='text-center text-red-600 font-lexend text-xl font-bold'>Matches</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 items-stretch lg:grid-cols-6 gap-5 w-full'>
            {matches.slice(0,5).map((match) => {
                return(
                    <MatchCard home={match.home} away={match.away} homeScore={match.awayScore} awayScore={match.awayScore} homeIcon={match.homeIcon} awayIcon={match.awayIcon}/>
                )
            })}
            <div className='bg-red-600 hover:shadow-lg flex-col hover:bg-red-600 transition ease-in-out hover:shadow-red-600 flex px-4 py-5 items-center rounded-lg text-left justify-between'>
                <h1 className='font-lexend text-white'>More Matches</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </div>
        </div>
    </div>
  )
}

export default MatchSection
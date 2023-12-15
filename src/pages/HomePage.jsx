import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import MatchSection from '../components/Matches/MatchSection'
import PointsTable from '../components/Points Table/PointsTable'
import CustomFooter from '../components/CustomFooter'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
        <Announcement/>
        <NavBar/>
        <HeroSection/>
        <MatchSection/>
        <PointsTable/>
        <CustomFooter/>
    </div>
  )
}

export default HomePage
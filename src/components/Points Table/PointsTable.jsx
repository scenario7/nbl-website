import React from 'react'
import TeamPoints from './TeamPoints'

const PointsTable = () => {
  return (
    <div className='flex flex-col px-5 py-5 space-y-5 items-start'>
        <h1 className='text-center text-red-600 font-lexend text-xl font-bold'>Table</h1>
        <TeamPoints/>
    </div>
  )
}

export default PointsTable
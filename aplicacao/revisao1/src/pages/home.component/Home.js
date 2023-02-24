import React from 'react'

import Activities from '../../components/activities.component/Activities'
import Hotels from '../../components/hotels.component/Hotels'
import Packages from '../../components/packages.componet/Packages'

const Home = () => {
  return (
    <div className='Home'>
        <div className='packages'>
            <Packages />
        </div>
        <div className='hotels'>
            <Hotels />
        </div>
        <div className='activities'>
            <Activities />
        </div>
    </div>
  )
}

export default Home
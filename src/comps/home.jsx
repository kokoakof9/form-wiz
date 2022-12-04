import React from 'react'
import AppCanvas from './canvas/appCanvas'
import AppOutput from './simulation/appOutput'
import AppSimulation from './simulation/appSimulation'
import AppTools from './tools_side/appTools'

export default function Home() {
  return (
    <div className='containter-fluid'>
      <div className='row p-0 m-0'>
        <div className="col-md-5">
          <AppCanvas/>
        </div>
        <div className="col-md-4">
          <AppSimulation />
          <AppOutput />
        </div>
        <div className="col-md-3">
          <AppTools/>
        </div>
      </div>
    </div>
  )
}

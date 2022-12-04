import React from 'react'
import { btnDataJson } from '../../data/btnsData'
import ToolBtn from './toolBtn'
import "./tools.css"

export default function AppTools() {
  return (
    <div className='tools_div'>
      {btnDataJson.map(item => {
        return (
          <ToolBtn key={item.label} item={item} />
        )
      })}
    </div>
  )
}

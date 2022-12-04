import React from 'react'
import { useSelector } from 'react-redux';

import InputSim from './inputSim';

export default function AppSimulation() {
  const {forms_ar} = useSelector(state => state.formSlice);
  return (
    <div className='px-2'>
      <h2>Form simulation:</h2>
      <form>
        {forms_ar.map(item => {
          return(
            <InputSim key={item.id} item={item} />
          )
        })}
      </form>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux';
import CanvasItem from './canvasItem';

export default function AppCanvas() {
  const {forms_ar} = useSelector(state => state.formSlice);
  console.log(forms_ar);
  return (
    <div className='canvas px-2'>
      <h2>Forms components:</h2>
      <div className="row">
        {forms_ar.map((item,i) => {
          return (
            <CanvasItem key={item.id} item={item} index={i} />
          )
        })}
      </div>
    </div>
  )
}

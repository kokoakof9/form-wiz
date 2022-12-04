import React from 'react'
import {add} from "../../redux_slices/formSlice"
import { useDispatch } from 'react-redux';

export default function ToolBtn(props) {
  const dispatch = useDispatch();
  let item =props.item;

  const onBtnClick = () => {
    dispatch(add({item:{name:item.label,id:Date.now(),type:"text",labelName:"name",cssClass:"form-control"}}))
    // alert("work")
    // TODO: add to redux item to ar 
  }

  return (
    <div onClick={onBtnClick} className='p-2 border border-dark bg-light my-1'>
      {item.label}
    </div>
  )
}

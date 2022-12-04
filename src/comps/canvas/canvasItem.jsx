import React, { useRef } from 'react';
import { removeItem, updateItem, changePosition } from "../../redux_slices/formSlice"
import { useDispatch } from 'react-redux';

export default function CanvasItem(props) {
  const dispatch = useDispatch();
  const selectRef = useRef();
  const labelRef = useRef();
  const classRef = useRef();
  let item = props.item;

  const onXClick = () => {
    console.log(item.id)
    dispatch(removeItem({ id: item.id }))
  }
  // TODO: option to change type, labelName, cssClass
  const onInputChange = () => {
    let newItem = { ...item };
    newItem.type = selectRef.current.value;
    dispatch(updateItem({ id: newItem.id, item: newItem }));
  }

  const onLabelInput = () => {
    let newItem = { ...item };
    newItem.labelName = labelRef.current.value;
    dispatch(updateItem({ id: newItem.id, item: newItem }));
  }

  const onClassInput = () => {
    let newItem = { ...item };
    newItem.cssClass = classRef.current.value;
    dispatch(updateItem({ id: newItem.id, item: newItem }));
  }

  const onMinusIndex = () => {
    // alert(props.index)
    dispatch(changePosition({change:"minus",i:props.index}))
  }
  
  const onPlusIndex = () => {
    dispatch(changePosition({change:"plus",i:props.index}))

  }

  return (
    <div className='col-12 border p-2'>
      <button onDoubleClick={onXClick} className='btn btn-danger float-end mt-2'>X</button>
      <div className='d-flex'>
        <label>Name: {item.labelName}</label>
        <input className='ms-2' defaultValue={item.labelName} onInput={onLabelInput} ref={labelRef} type="text" />
        <div className='ms-2'>Kind: {item.name}</div>
      </div>
      <div className='d-flex'>
        <label>Css class: {item.cssClass}</label>
        <input className='ms-2' defaultValue={item.cssClass} onInput={onClassInput} ref={classRef} type="text" />
      </div>

      
      <label className='me-2'>Type: </label>
      <select onChange={onInputChange} ref={selectRef} defaultValue={item.type}>
        <option value="text">Text</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
        <option value="password">Password</option>
        <option value="email">Email</option>
        <option value="tel">Phone</option>
      </select>
      <label className='ms-2'>Position: {props.index}</label>
      <button onClick={onMinusIndex} className='mx-2'>-</button>
      <button onClick={onPlusIndex} >+</button>
    </div>
  )
}

// item:{name:item.label,id:Date.now(),type:"text",labelName:"",cssClass:"form-control"}

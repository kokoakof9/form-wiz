import React from 'react'


export default function InputSim(props) {
  let item = props.item;
  return (
    <div>
      <label>{item.labelName}</label>
      <input className={item.cssClass} type={item.type} />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export default function AppOutput(props) {
  // let item = props.item;
  const { forms_ar } = useSelector(state => state.formSlice);
  const [formSt,setFormSt] = useState("");


  useEffect(() => {
    let st = "&#60;form&#62;<br/>";
    forms_ar.forEach(item => {
      st += `
      &#60;label&#62;${item.labelName}&#60;&#47;label&#62;<br/>
      &#60;input class="${item.cssClass}" type="${item.type}"
      &#47;&#62;<br/>`
    })
    st += `&#60;button&#62;submit&#60;&#47;button&#62;`
    st += `<br/>&#60;&#47;form&#62;`
    setFormSt(st)
  },[forms_ar])

  return (
    <div >
      <div className='border p-2'>
        <article dangerouslySetInnerHTML={{__html:formSt}}></article>
      </div>
    </div>
  )
}

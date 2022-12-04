import { createSlice } from "@reduxjs/toolkit";
 
// להגדיר לסלייס את הסטייט ההתחלתי שלו
const initValue = {
  forms_ar:[]
}
 
const formSlice = createSlice({
  name:"form",
  initialState: initValue,
  reducers: {
   add:(state,actions) => {
      state.forms_ar.push(actions.payload.item)
   },
   removeItem:(state,actions) => {
     state.forms_ar = state.forms_ar.filter(item => item.id != actions.payload.id)
      // console.log(actions.payload.id,_ar,state)
      // state.forms_ar.splice(0,1);
   },
   updateItem:(state,actions) => {
    let index = state.forms_ar.findIndex(item => item.id == actions.payload.id)
    state.forms_ar[index] = actions.payload.item;
   },
   reset:(state,actions) => {
    state.forms_ar = [];
   },
   changePosition:(state,actions) => {
    let i = actions.payload.i
    let currentItem = {...state.forms_ar[i]}
    state.forms_ar.splice(i,1)
    if(actions.payload.change == "plus"){
      state.forms_ar.splice(i+1,0,currentItem)
    }
    else if(actions.payload.change == "minus"){
      state.forms_ar.splice(i-1,0,currentItem)
    }
   }
  }
})
 
export const {add,removeItem,reset,updateItem,changePosition} = formSlice.actions
export default formSlice.reducer
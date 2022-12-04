
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css'
import Home from './comps/home'
import formSlice from './redux_slices/formSlice';

const myStore = configureStore({
  reducer:{
    formSlice
  }
})


function App() {

  return (
    <Provider store={myStore}>
      <Home />
    </Provider>
  )
}

export default App

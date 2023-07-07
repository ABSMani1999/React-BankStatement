import React, { useReducer } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Transactions from './Transactions';
import { Context,Reducer,InitialState } from './Context';


const Routing = () => {

  const [obj,dispatch] = useReducer(Reducer,InitialState)
// console.log(obj)
  return (
    <Context.Provider value={{obj,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/data' element={<Transactions/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default Routing
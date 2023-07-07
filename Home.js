import React, { useContext, useState,useEffect } from 'react'
import { Context } from './Context';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';


const Home = () => {
    const [inputValue,setInputValue] = useState();
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    const {obj,dispatch} = useContext(Context);

useEffect(()=>{
    var toDayDate = new Date()
    let currentTime = toDayDate.toLocaleTimeString();
    let currentDate = toDayDate.toLocaleDateString();
        setDate(currentDate);
        setTime(currentTime);
        // console.log(time,date)
},[date,time])

//Add amount function
    const addAmount =(e) => {
        e.preventDefault();
        let statement = 'Add'; 
        let add = parseInt(obj.amount)+parseInt(inputValue);
        dispatch({type:'balance', payload:add})
        const additionObj ={
                date : date,
                time : time,
                amount : inputValue,
                statement : statement,
            }
            //  console.log(additionObj)
            dispatch({type: 'addobj',payload:[...obj.arr,additionObj]})
    }

//Remove amount
    const removeAmount = (e) => {    
        e.preventDefault();
        var statement = 'Remove'; 
        let add = parseInt(obj.amount)-parseInt(inputValue);
        dispatch({type:'balance', payload:add})
        const additionObj ={
                date : date,
                time : time,
                amount : inputValue,
                statement : statement 
            }
            //  console.log(additionObj)
            dispatch({type: 'removeobj',payload:[...obj.arr,additionObj]})
    }

  return (
    <div>
        <form>
            <h2>Balance :{obj.amount}</h2>
            <TextField type='number' onChange={((e)=>setInputValue(e.target.value))} size='small' id="filled-basic" label="Enter Amount" variant="filled"/><br/><br/>
            <Button onClick={addAmount} size='small' variant="contained">Add</Button><br/><br/>
            <Button onClick={removeAmount} size='small' variant="contained">Remove</Button><br/><br/>
            <Button variant="outlined" size='small'><Link to={"/data"} >Data</Link></Button>
        </form>
    </div>
  )
}

export default Home
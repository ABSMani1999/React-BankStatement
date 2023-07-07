import React from 'react'
import { Context } from './Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';

const Transactions = () => {

    const {obj} = useContext(Context);
    let arr = obj.arr
    console.log(arr)
  return (
    <div>

        <h2>Transactions:</h2>
        {
            arr.map((e,index)=>{
                return <div key={index}>
                    <h3>{e.date}T{e.time}-{e.amount}-{e.statement}</h3>
                    </div>
            })
        }
        <Button variant="outlined"><Link to={'/'}>Home</Link></Button>
    </div>
  )
}

export default Transactions
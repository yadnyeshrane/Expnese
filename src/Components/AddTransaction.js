import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export default function AddTransaction() {
    const[text,setText]=useState("");
    const[amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext)
const onsubmit=(e)=>{
    e.preventDefault();
    
    const newTransaction={
        id:Math.floor(Math.random()*10000),
        text,
        amount:+amount,
    }
    console.log(newTransaction)
    addTransaction(newTransaction)
}
    return (
        <>
        <h3>Add new transaction</h3>
        <form  onSubmit={onsubmit}>
           <div className="form-control">
      <label htmlFor="text"  ></label>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text.."></input>
           </div>
           <div className="form-control">
          <label htmlFor="amount">
               Amount <br/>
               (negative-expense, positive-income) 
          </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount.."></input>
           </div>
           <button className="btn" >Add transaction</button>
        </form>
        </>
    )
}

import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function TransactionList() {
    const {transaction,deleteTransaction}=useContext(GlobalContext);
    console.log(transaction)
    
    return (
        <>
        <h3>History</h3>
        <ul id="list" className="list">
            {
                transaction.map(transaction=>(<li className={transaction.amount<0?'minus':'plus'} key={transaction.id}>
                {transaction.text}<span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn" onClick ={()=>deleteTransaction(transaction.id)}>X</button>
            </li>))
            }
        
        </ul>
        </>
    )
}

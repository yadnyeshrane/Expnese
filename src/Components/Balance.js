import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function Balance() {
    const {transaction} = useContext(GlobalContext)
    const amount=transaction.map(transac=>transac.amount)
    const total=amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    console.log('total',total);
    return (
        <div>
           <h4>Your Balance</h4> 
           <h1 id="balance">${total}</h1>
        </div>
    )
}

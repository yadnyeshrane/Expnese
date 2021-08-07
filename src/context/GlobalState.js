import React,{Children, createContext,useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState={
    transaction:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Flower',amount:300},
        {id:3,text:'Flower',amount:-10},
        {id:4,text:'Flower',amount:150},
    ]
}

export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);

function deleteTransaction(id)
{
    dispatch({
        type:'Delete',
        payload:id,
    })
}
function addTransaction(transaction)
{
    dispatch({
        type:"Add",
        payload:transaction
    })
}

    return(<GlobalContext.Provider value={{
        transaction:state.transaction,deleteTransaction,addTransaction
    }}>{children}</GlobalContext.Provider>)
}
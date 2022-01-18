import React from 'react';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import './App.css'
import { useState } from 'react'

function App() {
  const design = {color:'red', textAlign:'center', fontSize:'1.5rem'}
  // const initData = [
  //   {id:1,title:"healty expense", amount:2000},
  //   {id:2,title:"gas cost", amount:5000},
  //   {id:3,title:"rent hotel", amount:8000},
  // ]
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem) =>
  {
    setItems((prevItem) =>
    {
      return [newItem,...prevItem]
    })
  }


  return (
    <div className='container'>
        <h1 style={design}>Apps Statement Income - Expense</h1>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items={ items }/>
    </div>
  );
}

export default App;
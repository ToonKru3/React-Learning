import React from 'react';
import Transaction from './components/Transaction';
import './App.css'

function App() {
  const design = {
    color:'red',
    textAlign:'center',
    fontSize:'1.5rem'
  }
  return (
    <div className='container'>
        <h1 style={design}>Apps Statement Income - Expense</h1>
        <Transaction/>
    </div>
  );
}

export default App;
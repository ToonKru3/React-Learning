import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HelloComponent'
import App from './App'

// Creating Function Component
// function HelloComponent()
// {
//   return <h1>HelloReact</h1>
// }

// Creating Class Component
// class HelloComponent extends React.Component
// {
//   render()
//   {
//     return <h1>Hello React</h1>
//   }
// }



// ReactDOM.render(<,document.getElementById><App /></>,document.getElementById('root'));
ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

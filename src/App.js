import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const soudia = ['jolfa','kolfa','solfa','dolfa','molfa','alfa']
  const hmm = ['wow', 'hello', 'good', 'nice'] 
  const manus = [{name:'abol'},{name:'babol'},{name:'sabol'},{name:'kabol'}]
  return (
    <div className="App">
      {
        soudia.map(julfa => <Nayok name={julfa}></Nayok>)
      }
      {
        manus.map(men => <Nayok name={men.name}></Nayok>)
      }
        <Nayok name={'33333333'}></Nayok>
        <Nayok name={hmm[1]}></Nayok>
        <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        
        <Nayok name={hmm[0]}></Nayok>
        <Nayok name={hmm[2]}></Nayok>
        <Nayok name={hmm[3]}></Nayok>

      </header>
    </div>
  );
}

function Nayok(props){
 

  const [count, setCount] = useState(5)
  const handleClick = () => setCount(count + 1);
  return(
    <div style={{border:'2px solid red', margin:'5px'}}>
      <h1>Md Mahbub Ahmed {count}</h1>
      <button onClick={handleClick}>click me</button>
      <h3>Bangladesh - {props.name ||'wow'}</h3>
      <Mov noveis={count - 5}></Mov>
      <Mov noveis={count - 5}></Mov>
    </div>
  )
}

function Mov(props){
  return (
  <h1>Movies{props.noveis}</h1>
  )
}

export default App;

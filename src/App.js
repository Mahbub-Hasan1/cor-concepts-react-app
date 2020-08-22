import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

let style={
  color:'#fff',
  backgroundColor:'#0866D6',
  border: '2px solid #fff',
  fontSize:'20px',
  padding:'10px',
  margin:'10px',
  borderRadius:'0px 25px 0px 25px'
}
let wow = {
  name: 'MD MAHBUB AHMED',
  job: 'bangladesh'
}

function App() {
  let nayoks = ['riz', 'robe', 'rakes', 'katar', 'wow', 'my', 'name', 'mahbub', 'ahmed']
  let prodarck = [
    {name: 'MD MAHBUB AHMED', prise:'$3000'},
    {name: 'MD MAMUN AHMED', prise: '$4000'},
    {name: 'MD MARUF AHMED', prise: '$5550'}
  ]
  
  let nayoksName = nayoks.map(nayok => nayoks)
  console.log(nayoksName)
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>

        <img src={logo} className="App-logo" alt="logo" />
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          prodarck.map(prodarcke => <li>{prodarcke.name}{prodarcke.prise}</li>)
        }
        <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
        </ul>
        {
          prodarck.map(pd=><Card prodarck={pd}></Card>)
        }
        <Card name={prodarck[0].name} prise={prodarck[0].prise}></Card>
        <Card name={prodarck[1].name} prise={prodarck[1].prise}></Card>
        <Card name={prodarck[2].name} prise={prodarck[2].prise}></Card>
        <Card name={prodarck[0].name} prise={prodarck[1].prise}></Card>

        <Md name='Md Mahbub Ahmed💖💖' desh='Bangladesh'></Md>
        <Md name='Md Marup Ahmed💖💖' desh='us'></Md>
        <Md name='Md Mamun Ahmed💖💖' desh='canada'></Md>
        <Md name={wow.name}></Md>
        <Md name={wow.job}></Md>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(11)
  const hendleIncrease = () => {setCount(count + 1);
  }
  const hendleDncrease = ()=> {setCount(count - 1)};

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={hendleIncrease}>click me</button>
      <button onClick={hendleDncrease}>click me.</button>
    </div>
  )
}

function Card(props) {
  let styleCard={
    backgroundColor: 'rgba(183, 0, 255, .50)',
    height: '200px',
    width: '200px',
    color: 'ghostwhite',
    margin:'5px',
    fontSize: '15px',
    border: '5px solid #F3831D',
    borderRadius: '5px',
    float: 'left' 
  }
  return (
    <div style={styleCard}>
      <h2>{props.name}</h2>
      <h5>{props.prise}</h5>
      <button>Bay now</button>
    </div>
  )
}

function Md(props){
  return (
    <div style={style}>
      <h3>Name : {props.name}</h3>
      <h5>Desh: {props.desh}</h5>
      
    </div>
  )
}


export default App;

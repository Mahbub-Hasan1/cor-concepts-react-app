import React, { useState, createContext } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Header/Home/Home';
import Shipment from './component/Shipment/Shipment';
import Category from './component/Category/Category';

export const ShipmentContext = createContext();

function App() {
  const [count, setCount] = useState('Laptop')
  return (
    <ShipmentContext.Provider value={[count, setCount]}>
      <p>count : {count}</p>
      <Header></Header>
      <Home count = {count}></Home>
      <Shipment></Shipment>
      <Category></Category>
    </ShipmentContext.Provider>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ShipmentContext } from '../../App';

const Header = (props) => {

const [count, setCount] = useContext(ShipmentContext);

    return (
        <div>
            <h1>This is a header{count}</h1>
            <button onClick={()=>setCount('Laptop')}>click++</button>
            <button onClick={()=>setCount('Mobile')}>click++</button>
            <button onClick={()=>setCount('Camera')}>click++</button>
        </div>
    );
};

export default Header;
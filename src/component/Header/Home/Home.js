import React, { useContext } from 'react';
import Shipment from '../../Shipment/Shipment';
import { ShipmentContext } from '../../../App';

const Home = () => {
    const [ship, setShip] = useContext(ShipmentContext)
    return (
        <div>
            <h1>This is Home{ship}</h1>
            <button onClick={()=>setShip(ship + 1 )}>click ++</button>
        </div>
    );
};
// function Person(){

// }
//  var person = Person()
//  var person = new Person()

export default Home;
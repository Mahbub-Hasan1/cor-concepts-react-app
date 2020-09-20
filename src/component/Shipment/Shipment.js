import React from 'react';
import { useContext } from 'react';
import { context, ShipmentContext } from '../../App';

const Shipment = () => {
    const count = useContext(ShipmentContext)
    return (
        <div>
            <h1>Shipmint {count}</h1>
        </div>
    );
};

export default Shipment;
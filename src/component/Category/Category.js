import React from 'react';
import { useContext } from 'react';
import { ShipmentContext } from '../../App';

const Category = () => {
    const category = useContext(ShipmentContext)
    return (
        <div>
            <h2>Select your category{category}</h2>
        </div>
    );
};

export default Category;
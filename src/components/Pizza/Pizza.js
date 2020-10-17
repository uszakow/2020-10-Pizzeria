import React, { useState, useEffect } from 'react';
import './Pizza.scss';

import axios from 'axios';

import PizzaItem from './PizzaItem/PizzaItem';

const Pizza = () => {
    const [state, setState] = useState({ pizza: [] });

    useEffect(() => {
        const getPizzaMenu = async () => {
            const url = "http://localhost:3001/pizza";
            const response = await axios.get(url);
            setState({
                pizza: response.data
            })
        }
        getPizzaMenu();
    }, [])

    return (
        <div>
            <h1>Menu</h1>
            {state.pizza.map((item, index) => (
                <PizzaItem key={index} pizza={item}/>
            ))}
        </div >
    )
}

export default Pizza;
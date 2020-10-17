import React from 'react';
import './PizzaItem.scss';

const PizzaItem = ({ pizza }) => {
    if (pizza) {
        const photo = require(`./../../../../img/pizza/${pizza.img}`)
        return (
            <div>
                <img src={photo} alt={pizza.title} />
                <h2>{pizza.title}</h2>
                <button>Zamówić</button>
            </div>
        )
    } else {
        return null;
    }

}

export default PizzaItem;
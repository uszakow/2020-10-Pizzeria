import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

function Menu({ user }) {
    return (
        <nav className="menu-wrap">
            <NavLink exact to="/" className="menu-item" activeClassName="menu-item-active">Strona główna</NavLink>
            <NavLink exact to="/menu" className="menu-item" activeClassName="menu-item-active">Nasza oferta</NavLink>
            <NavLink exact to="/login" className="menu-item" activeClassName="menu-item-active">Logowanie</NavLink>

            {user.email !== '' &&
                <NavLink exact to="/user" className="menu-item" activeClassName="menu-item-active">Moje konto</NavLink>
            }

        </nav>
    )
}

export default Menu;
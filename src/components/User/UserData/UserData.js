import React from 'react';
import './UserData.scss';
import {
    NavLink,
    useRouteMatch
} from 'react-router-dom';

const UserData = ({ user }) => {
    const match = useRouteMatch();

    return (
        <main>            
            <p>Twoje dane:</p>
            <p>Imię: {user.name}</p>
            <p>Nazwisko: {user.surname}</p>
            <p>E-mail: {user.email}</p>
            <NavLink exact to={`${match.url}/edit`}>Edytować</NavLink>
            <button>Usuń konto</button>
        </main>
    )
}

export default UserData;
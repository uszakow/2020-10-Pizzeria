import React from 'react';
import './UserEdit.scss';

const UserEdit = ({ user }) => {
    return (
        <form>
            <p>Twoje dane:</p>
            <label>
                <span>Imię:</span>
                <input type="text" value={user.name} />
            </label>
            <label>
                <span>Nazwisko:</span>
                <input type="text" value={user.surname} />
            </label>
            <label>
                <span>E-mail:</span>
                <input type="text" value={user.email} />
            </label>
            <label>
                <span>Hasło:</span>
                <input type="text" value={user.password} />
            </label>
            <label>
                <span>Powtórz hasło:</span>
                <input type="text" value={user.password} />
            </label>
            <button type="submit">Potwierdź zmiany</button>
        </form>
    )
}

export default UserEdit;
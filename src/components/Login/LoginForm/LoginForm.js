import React from 'react';
import './LoginForm.scss';

const LoginForm = ({ loginUser, handleInputChange, email, password }) => {


    const handleOnSubmit = (e, loginUser) => {
        e.preventDefault();
        loginUser(email, password);
    }

    return (
        <form className="login-form" onSubmit={(e) => handleOnSubmit(e, loginUser)} >
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" name="email" onChange={handleInputChange} />
            <label htmlFor="password">Hasło:</label>
            <input type="text" id="password" name="password" onChange={handleInputChange} />
            <button type="submit" className="login-button-submit">Zaloguj się</button>
        </form>
    )
}

export default LoginForm;
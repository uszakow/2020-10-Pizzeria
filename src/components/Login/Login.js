import React, { Component } from 'react';
import './Login.scss';

import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    //  = ({ user, loginUserDto, logoutUserDto }) => {

    dataFromInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    // if (user.password === state.password) {
    //     return (
    //         <div>
    //             <p>Witaj, {user.name}</p>
    //             <button onClick={logoutUserDto}>Wyloguj</button>
    //         </div>
    //     )
    // } else if (user.password !== state.password && user.password) {
    //     return (
    //         <div>adfadf</div>
    //     )
    // } else {
    //     return (
    //         <LoginForm loginUser={loginUserDto} handleInputChange={dataFromInputs} email={state.email} />
    //     )
    // }
    // console.log(state)

    render() {
        // console.log(this.state)
        const { user, loginUserDto, logoutUserDto } = this.props;
        const { email, password } = this.state;

        return user.email === '' ?
            <>
                <LoginForm loginUser={loginUserDto} handleInputChange={this.dataFromInputs} email={email} password={password} />
            </>
            :
            <div>
                {/* {console.log(user)} */}
                <p>Witaj, {user.name}</p>
                <button onClick={logoutUserDto}>Wyloguj</button>
            </div>
    }
}

export default Login;
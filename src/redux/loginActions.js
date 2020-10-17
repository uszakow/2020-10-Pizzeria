import axios from 'axios';

const LOGIN = "[login actions] login user";
const LOGOUT = "[login actions] logout user";

const login = (user) => ({
    type: LOGIN,
    user
});

const logout = () => ({
    type: LOGOUT
});

const getUser = async (email, password) => {
    const url = "http://localhost:3001/users?email=" + email;
    const response = await axios(url);
    const user = response.data[0];

    // if (user.password === password){
        console.log('password')
        console.log(password)
        console.log("email")
        console.log(email)
        return user;
    // } else {        
        // return null;
    // }
}

const loginUser = (email) => (dispatch) => {
    getUser(email)
        .then(user => dispatch(login(user)));
}

export { LOGIN, LOGOUT, logout, loginUser };
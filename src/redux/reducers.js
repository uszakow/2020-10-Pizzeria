import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from './loginActions';

const initialState = {
    id: '',
    name: '',
    surname: '',
    email: '',
    password: ''
};

const activeUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            if (action.user) {
                state = {
                    id: action.user.id,
                    name: action.user.name,
                    surname: action.user.surname,
                    email: action.user.email,
                    password: action.user.password
                };
            }

            return state;
        case LOGOUT:
            state = initialState;
            return state;
        default:
            return state;
    }
};

export default combineReducers({ activeUser });
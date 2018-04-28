import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../types/auth';
import authApi from '../api/auth';
import setAuthorizationHeader from "../utils/setAuthHeader";

export const userLoggedIn = ({token, user}) => ({ // user log event
    type: USER_LOGGED_IN,
    token,
    user
});

export const userLoggedOut = () => ({ // user log out event
    type: USER_LOGGED_OUT
});

export const login = credentials => dispatch => authApi.login(credentials).then(data => {
    const {token} = data;
    dispatch(userLoggedIn(data)); // start action user log with data
    localStorage.bee = token; // write to localStorage token
    setAuthorizationHeader(token); // set header
});

export const logout = () => dispatch => {
    localStorage.removeItem("bee"); // remove token in localStorage название поля обьекта
    setAuthorizationHeader(); // set empty header
    dispatch(userLoggedOut()); // start empty action
};

export const loginWithToken = (data, dispatch) => dispatch(userLoggedIn(data));
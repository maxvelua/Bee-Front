import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types/auth";

export default (state = {}, action = {}) => { // list of events
    switch (action.type) {
        case USER_LOGGED_IN:
            return {token: action.token};
        case USER_LOGGED_OUT:
            return {};
        default: return state;
    }
}

// dispatch {type: USER_LOGGED_IN,token,userData.jsx}
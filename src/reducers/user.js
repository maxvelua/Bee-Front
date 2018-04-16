import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types/auth";

export default (state = {}, action = {}) => { // завжди буде перевіряти кожен reducer чи в нього є потрібний йому тип
    switch (action.type) { // only switch
        case USER_LOGGED_IN: //
            return {...action.user};
        case USER_LOGGED_OUT:
            return {};
        default: return state; // якщо не знаходить вертає теперішній стан
    }
}

// dispatch {type: USER_LOGGED_IN,token,userData.jsx}
// dispatch {type: ANOTHER_ACTION, bla, blala}
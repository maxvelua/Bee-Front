import axios from "axios";

export default (token = null) => {
    if (token) {
        axios.defaults.headers.common.authorization = token; // set token to header
    } else {
        delete axios.defaults.headers.common.authorization; // set default header empty ?
    }
};
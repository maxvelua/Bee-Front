import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './rootReducer';
import {loginWithToken} from "./actions/auth";
import userApi from './api/user';
import setAuthHeader from './utils/setAuthHeader';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const init = async () => {
    try {
        const token = localStorage.bee;
        setAuthHeader(token);
        const user = await userApi.getUser();
        loginWithToken({token, user}, store.dispatch);
    } catch (err) {
        localStorage.removeItem("bee"); // название поля обьекта
        setAuthHeader();
    } finally {
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <Route store={store} component={App}/>
                </Provider>
            </BrowserRouter>,
            document.getElementById('root')
        );
        registerServiceWorker();
    }
};

init();

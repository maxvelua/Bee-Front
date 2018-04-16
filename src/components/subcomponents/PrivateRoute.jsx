import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, permission = 0, userType = 0, auth, ...rest }) => (
    <Route {...rest} render={props => (
        auth && userType <= permission /*Проверка здесь*/ ? <Component {...props}/> : <Redirect to={{pathname: '/login', state: {from: props.location }}}/>
        // if user is authorized go to next props if not, then go to login
    )}/>
)
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import Login from '../Login/Login';
import { isLogin } from '../utils';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    return (

        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to={"/"} />
                :
                <Component {...props} />
        )
        }
        />
    );
}

export default PublicRoute;
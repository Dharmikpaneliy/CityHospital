import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils';

function PrivateRoute({ component: Component,restricted=false, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Component {...props} />
                :
                <Redirect to={"/login"} />
        )
        }
        />
    );
}

export default PrivateRoute;
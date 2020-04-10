import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact}) => {
   
    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/home" />
                )
        )} />
    )
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {

    return (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        )} />
    )
};


const msp = state => {
    let currentUser = state.entities.users[state.session.id]
    let workspaces = state.entities.workspaces
    return { loggedIn: Boolean(state.session.id), currentUser, workspaces };
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectedRoute = withRouter(connect(msp, null)(Protected));

import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {

    
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById("root");

    //TESTING
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.store = store;
    //TESTING
    
    ReactDOM.render(<Root store={store} />, root);
});
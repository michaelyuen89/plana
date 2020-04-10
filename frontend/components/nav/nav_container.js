import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from './nav';
import { logout } from '../../actions/session_actions';


const msp = state => ({
    currentUser: state.session.currentUser,
});
// const mdp = dispatch => ({
//     logout: () => dispatch(logout()),
// });



export default connect(msp, null)(NavBarComponent);
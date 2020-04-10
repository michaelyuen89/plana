import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        login: <Link to="/login">Log In</Link>,
        formType: "login"
    };
};

const mdp = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(msp, mdp)(SessionForm);

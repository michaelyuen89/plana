import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = ({ errors }) => {
    return {
        errors: errors.session,
        signup: <Link to="/signup">Sign Up</Link>,
        formType: "signup"
    };
};

const mdp = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(msp, mdp)(SessionForm);


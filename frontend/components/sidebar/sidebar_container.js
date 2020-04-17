import { connect } from 'react-redux';
import Sidebar from './sidebar'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp,mdp)(Sidebar);

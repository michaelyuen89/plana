import { connect } from 'react-redux';
import Tasks from './tasks';
import { logout } from '../../actions/session_actions';


const msp = state => ({
    currentUser: state.session.currentUser,
});
const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});



export default connect(msp, mdp)(Tasks);
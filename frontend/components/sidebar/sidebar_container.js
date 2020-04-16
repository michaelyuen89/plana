import { connect } from 'react-redux';
import Sidebar from './sidebar'

const msp = state => {
 
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp,mdp)(Sidebar);

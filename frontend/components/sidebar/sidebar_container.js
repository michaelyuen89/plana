import { connect } from 'react-redux';
import { fetchWorkspaces } from '../../actions/workspace_actions';
import Sidebar from './sidebar'

const mapStateToProps = (state, ownProps) => {
    return {
        workspace: ownProps.workspace
    };
};

const mapDispatchToProps = dispatch => ({
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

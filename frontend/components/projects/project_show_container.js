import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    return {
    projectId: ownProps.match.params.projectId,
    currentProject: state.entities.projects[projectId]
    }
};

const mdp = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id))
});


export default withRouter(connect(msp,mdp)(ProjectShow));
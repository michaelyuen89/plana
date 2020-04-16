import { connect } from 'react-redux';
import ProjectShow from './project_show';


const msp = (state, ownProps) => ({
    projectId: ownProps.match.params.projectId,
    // currentProject: state.entities.projects[projectId]
});

const mdp = dispatch => ({
    fetchProject: id => dispatch(fetchProject(id))
});


export default connect(msp,mdp)(ProjectShow);
import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../actions/project_actions';


const msp = state => ({
    errors: state.entities.errors
})

const mdp = dispatch => ({
    createProject: (project) => dispatch(createProject(project)),

})

export default connect(msp, mdp)(ProjectForm);
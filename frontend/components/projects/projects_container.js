import { fetchProjects } from '../../actions/project_actions';
import { connect } from 'react-redux';
import Projects from './projects'


const msp = state => ({
    projects: state.entities.projects
});


const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(msp, mdp)(Projects);
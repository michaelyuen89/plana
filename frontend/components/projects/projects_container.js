import { fetchProjects } from '../../actions/project_actions';
import { connect } from 'react-redux';
import Projects from './projects'


const msp = ({ entities: { projects, users}, session }) => {
  const currentUser = users[session.id];
  const filteredProjects = currentUser.project_ids.map(id => projects[id]);
  // debugger;

  return {
    projects: filteredProjects
  };
};


const mdp = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(msp, mdp)(Projects);
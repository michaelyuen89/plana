import { RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';


const projectsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return Object.assign({}, state, {[action.project.id]: action.project});
        case REMOVE_PROJECT:
            let nextState = Object.assign({}, state);
            delete nextState[action.projectId];
            return nextState;
        default:
            return state;
    }
}

export default projectsReducer;
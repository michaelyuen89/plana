import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT, REMOVE_PROJECT } from '../actions/project_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_PROJECT:
            newState = Object.assign({}, state);
            const { project } = action;
            if (newState[project.user_id].project_ids.indexOf(project.id) === -1) {
              newState[project.user_id].project_ids.push(project.id);
              return newState;
            } else {
              return state;
            }
        case REMOVE_PROJECT:
            newState = Object.assign({}, state);
            const targetIdx = newState[action.project.user_id].project_ids.indexOf(action.project.id);

            newState[action.project.user_id].project_ids.splice(targetIdx, 1);
            
            return newState;
        default:
            return state;
    }
};

export default usersReducer;

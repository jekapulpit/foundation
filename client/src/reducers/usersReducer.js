import { AUTHENTICATE } from "../actionTypes";

export default (state = { currentUser: {} }, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            let newCurrentUser = action.currentUser;
            return {...state, currentUser: newCurrentUser};
        default:
            return state;
    }
};

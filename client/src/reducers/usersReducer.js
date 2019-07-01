import {AUTHENTICATE, LOG_OUT} from "../actionTypes";

export default (state = { currentUser: {} }, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            let newCurrentUser = action.currentUser;
            return {...state, currentUser: newCurrentUser};
        case LOG_OUT:
            return {...state, currentUser: null};
        default:
            return state;
    }
};

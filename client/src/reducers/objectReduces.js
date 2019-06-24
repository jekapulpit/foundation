import { SET_OBJECT, SET_OBJECT_LIST, HANDLE_EDIT, HANDLE_UPDATE } from '../actionTypes'

export default (state = { objectList: [], currentObject: {} }, action) => {
    switch (action.type) {
        case SET_OBJECT_LIST:
            let newObjectList = action.objectList;
            return {...state, objectList: newObjectList};
        case SET_OBJECT:
            let newObject = action.currentObject;
            return {...state, currentObject: { ...newObject, editable: false }};
        case HANDLE_EDIT:
            return {...state, currentObject: { ...state.currentObject, editable: !action.editable }};
        case HANDLE_UPDATE:
            return {...state, currentObject: action.currentObject};
        default:
            return state;
    }
};

import store from "../store";
import { SET_OBJECT, SET_OBJECT_LIST } from '../actionTypes'

export default (state = { objectList: [], currentObject: {} }, action) => {
    switch (action.type) {
        case SET_OBJECT_LIST:
            let newObjectList = action.objectList;
            return {...state, objectList: newObjectList};
        case SET_OBJECT:
            let newObject = action.currentObject;
            return {...state, currentObject: newObject};
        default:
            return state;
    }
};

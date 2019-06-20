export default (state = { objectList: [] }, action) => {
    switch (action.type) {
        case 'SET_OBJECT_LIST':
            let newObjectList = action.objectList;
            return {...state, objectList: newObjectList};
        default:
            return state;
    }
};

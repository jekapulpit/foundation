import { SET_DRAFT, SET_DRAFT_LIST, HANDLE_EDIT_DRAFT, HANDLE_UPDATE_DRAFT } from '../actionTypes'

export default (state = { draftList: [], currentDraft: {} }, action) => {
    switch (action.type) {
        case SET_DRAFT_LIST:
            let newDraftList = action.draftList;
            return {...state, draftList: newDraftList};
        case SET_DRAFT:
            let newDraft = action.currentDraft;
            return {...state, currentDraft: { ...newDraft, editable: false }};
        case HANDLE_EDIT_DRAFT:
            return {...state, currentDraft: { ...state.currentDraft, editable: !action.editable }};
        case HANDLE_UPDATE_DRAFT:
            return {...state, currentDraft: action.currentDraft};
        default:
            return state;
    }
};

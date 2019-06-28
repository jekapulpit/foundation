import { SET_ARTICLE, SET_ARTICLE_LIST, HANDLE_EDIT, HANDLE_UPDATE } from '../actionTypes'

export default (state = { articleList: [], currentArticle: {} }, action) => {
    switch (action.type) {
        case SET_ARTICLE_LIST:
            let newArticleList = action.articleList;
            return {...state, articleList: newArticleList};
        case SET_ARTICLE:
            let newArticle = action.currentArticle;
            return {...state, currentArticle: { ...newArticle, editable: false }};
        case HANDLE_EDIT:
            return {...state, currentArticle: { ...state.currentArticle, editable: !action.editable }};
        case HANDLE_UPDATE:
            return {...state, currentArticle: action.currentArticle};
        default:
            return state;
    }
};

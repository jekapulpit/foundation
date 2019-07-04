import usersReducer from "./reducers/usersReducer";
import articleReducer from "./reducers/articleReducer"
import draftReducer from "./reducers/draftReducer";
import { createStore, combineReducers } from "redux"; // импорт из Redux-библиотеки
import initialState from './initialState';

export default createStore(
    combineReducers({
        user: usersReducer,
        article: articleReducer,
        draft: draftReducer
    }),
    initialState);

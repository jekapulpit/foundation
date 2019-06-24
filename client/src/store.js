import usersReducer from "./reducers/usersReducer";
import objectReducer from "./reducers/objectReduces"
import { createStore, combineReducers } from "redux"; // импорт из Redux-библиотеки
import initialState from './initialState';

export default createStore(
    combineReducers({
        user: usersReducer,
        object: objectReducer
    }),
    initialState);

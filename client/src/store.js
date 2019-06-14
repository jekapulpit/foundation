import usersReducer from "./reducers/usersReducer";
import { createStore } from "redux"; // импорт из Redux-библиотеки
import initialState from './initialState';

export default createStore(
    usersReducer,
    initialState);

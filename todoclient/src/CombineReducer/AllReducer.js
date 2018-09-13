import { combineReducers } from 'redux';
import allTodoReducer from '../Component/TodoList/Reducers/getAllTodosReducer';

let allReducer = combineReducers({
	allTodoReducer
});

export default allReducer;

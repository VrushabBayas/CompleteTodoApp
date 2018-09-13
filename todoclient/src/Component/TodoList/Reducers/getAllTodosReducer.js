import getAllTodos from '../Actions/FetchAllTodosAction';

let initialState = {
	todos: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALL_TODOS':
			return Object.assign({}, state, {
				...state.todos,
				todos: action.todos
			});
		default:
			return state;
	}
};

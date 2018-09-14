import axios from 'axios';
const host = 'localhost:3001';
const url = host + '/getAllTodos';

const GET_ALL_TODOS = 'GET_ALL_TODOS';

export default function getAllTodosFromDB() {
	return (dispatch) => {
		return (axios.get(url).then((res) => {
			console.log('res: ', res);
			dispatch(getAllTodosSucess(res.data.data));
		}).catch = (err) => {
			console.log(err);
		});
	};
}

export function getAllTodosSucess(todos) {
	return {
		type: GET_ALL_TODOS,
		todos
	};
}

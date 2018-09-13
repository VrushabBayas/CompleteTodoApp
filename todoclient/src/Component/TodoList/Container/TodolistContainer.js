import React, { Component } from 'react';
import styles from '../CSS/todolist.css';
import { button } from 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import fetchAllTodoAction from '../Actions/FetchAllTodosAction';
import TodoList from '../Component/TodoList';

class TodoListContaianer extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	componentWillMount() {
		console.log('$$$$$$$$$$$$$$$$');
		this.props.fetchAllTodoAction();
	}
	getAllTodos = () => {
		console.log('fdfdf');
		this.props.fetchAllTodoAction();
	};
	render() {
		return (
			<div className="todolist">
				<button className="btn btn-primary" onClick={this.getAllTodos}>
					See Todos
				</button>
				<p>Click to load Todos</p>
				<hr />
				<TodoList allTodos={this.props.allTodos} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allTodos: state.allTodoReducer
	};
};
const mapDispatchToProps = (dispatch) => {
	dispatch({
		fetchAllTodoAction: fetchAllTodoAction
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContaianer);

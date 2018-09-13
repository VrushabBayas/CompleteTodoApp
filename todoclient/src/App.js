import React, { Component } from 'react';
import TodoListContainer from '../src/Component/TodoList/Container/TodolistContainer';
import './App.css';

import allReducer from './CombineReducer/AllReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducer);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TodoListContainer />
				</div>
			</Provider>
		);
	}
}

export default App;

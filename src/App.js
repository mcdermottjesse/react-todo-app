import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
	//State
	const [ inputText, setInputText ] = useState(''); // quotations as this state is for input text
	const [ todos, setTodos ] = useState([]); // square brackets as this state is for array
	const [ status, setStatus ] = useState('all'); // "all" is the default filter value
	const [ filteredTodos, setFilteredTodos ] = useState([]);

	// Use Effect
	// Only run once when app starts
	useEffect(() => {
		getLocalTodos();
	}, []);
	// Anytime specified state (displayed in brackets line 19) is used useEffect will run chosen function (filterHandler)
	useEffect(
		() => {
			filterHandler();
			saveLocalTodos();
		},
		[ todos, status ]
		// yellow error line wants filterHandler finction above where filterHandler is called
		// best to keep seperate though
	);
	//Funcs
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos); //shows all
				break;
		}
	};
	// Save to local
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Jesse's To Do List</h1>
			</header>
			{/* displays the written text <p>{ inputText }</p> */}
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;

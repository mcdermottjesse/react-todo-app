import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
	const [ inputText, setInputText ] = useState(''); // quotations as this state is for input text
	const [ todos, setTodos ] = useState([]); //square brackets as this state is for array
	return (
		<div className="App">
			<header>
				<h1>Jesse's To Do List</h1>
			</header>
			{/* displays the written text <p>{ inputText }</p> */}
			<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;

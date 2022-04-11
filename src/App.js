import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
	const [ inputText, setInputText ] = useState('');
	return (
		<div className="App">
			<header>
				<h1>Jesse's To Do List</h1>
			</header>
			<Form />
			<ToDoList />
		</div>
	);
}

export default App;

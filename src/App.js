import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
	const [ inputText, setInputText ] = useState(''); // quotations as this state is for input text
	const [ todos, setToDos ] = useState([]); //square brackets as this state is for array
	return (
		<div className="App">
			<header>
				<h1>Jesse's To Do List</h1>
			</header>
			{/* displays the written text <p>{ inputText }</p> */}
			<Form setInputText={setInputText} />
			<ToDoList />
		</div>
	);
}

export default App;

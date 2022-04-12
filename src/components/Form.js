const Form = ({ inputText, setInputText, todos, setTodos , setStatus }) => {
	const inputTextHandler = (event) => {
		setInputText(event.target.value);
	};
	//submitHandler function called as onClick event (will only appear onClick)
	const submitTodoHandler = (event) => {
		event.preventDefault();
		setTodos([ ...todos, { text: inputText, completed: false, id: (Math.random() * 1000).toFixed(2) } ]);
		setInputText(''); //sets state back to nothing
	};
	const statusHandler = (event) => {
		setStatus(event.target.value)
	};
	return (
		<form>
			<input
				value={inputText} //default value is whatever the setInputText value is on line 13
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square" />
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;

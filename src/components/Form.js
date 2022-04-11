const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (event) => {
		console.log(event.target.value);
		setInputText(event.target.value);
	};
	const submitToDoHandler = (event) => {
		event.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: (Math.random() * 1000).toFixed(2) }
		]);
		setInputText(''); //sets state back to nothing
	};
	return (
		<form>
			<input 
				value={inputText} //default value is whatever the setInputText value is on line 12
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button onClick={submitToDoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square" />
			</button>
			<div className="select">
				<select name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;

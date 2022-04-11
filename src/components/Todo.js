const Todo = ({ text, todo, todos, setTodos }) => {
	// Events
	const deleteHandler = () => {
		//filter method creates a new array by removing elements that don't belong
		setTodos(todos.filter((element) => element.id !== todo.id));
	};
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
            {/* completed is a class */}
			<li className={`todo-item ${todo.completed ? "completed" : "incomplete"}`}>{text}</li>
			<button onClick={completeHandler} className="complete-btn">
				<i className= {`${todo.completed ? "fas fa-undo-alt" : "fas fa-check" }`} />
			</button>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

export default Todo;

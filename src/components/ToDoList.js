import Todo from './Todo';
// { todos } is from the variable within <TodoList /> from App.js
const TodoList = ({ todos, setTodos, filteredTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
					<Todo
						todos={todos}
						setTodos={setTodos}
						text={todo.text}
						todo={todo} //gives access to each todo element
						key={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

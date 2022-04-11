import Todo from './Todo'
// { todos } is from the variable within <TodoList /> from App.js
const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {todos.map(todo => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        todo={todo} //gives access to each todo element
                        key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList
import Todo from './Todo'
// { todos } is from the variable within <TodoList /> from App.js
const TodoList = ({ todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {todos.map(todo => (
                    <Todo text={todo.text} id={todo.id}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList
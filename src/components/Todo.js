const Todo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        //filter method creates a new array by removing elements that don't belong
        setTodos(todos.filter((element) => element.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo
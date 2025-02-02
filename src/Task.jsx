import React from 'react';

const Task = React.memo(({ todo, removeTodo }) => {
    const handleClick = () => {
        removeTodo(todo.id);
    };

    React.useEffect(() => {
        console.count(`Rendering ToDoItem: ${todo.id}`);
    }, [todo]);

    return (
        <li>
            {todo.text}
            <button onClick={handleClick}>Remove</button>
        </li>
    );
});

export default Task;
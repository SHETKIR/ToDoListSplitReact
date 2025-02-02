import React from 'react';
import Task from './Task.jsx';

const List = React.memo(({ toDos, removeTodo }) => {
    return (
        <ul>
            {toDos.map((todo) => (
                <Task key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
        </ul>
    );
});

export default List;
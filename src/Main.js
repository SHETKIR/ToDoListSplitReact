import React from 'react';
import Form from './Form.jsx';
import List from './List.jsx';

const Main= () => {
    const [toDos, setToDos] = React.useState([]);

    const addTodo = (newTodo) => {
        setToDos([...toDos, newTodo]);
    };

    const removeTodo = (id) => {
        setToDos(toDos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <Form addTodo={addTodo} />
            <List toDos={toDos} removeTodo={removeTodo} />
        </div>
    );
};

export default Main;
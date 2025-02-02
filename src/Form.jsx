import React from 'react';

const Form = React.memo(({ addTodo }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addTodo({ id: Date.now(), text: inputValue });
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
});

export default Form;
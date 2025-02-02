import React, { useState } from 'react';

function ToDoAdd() {
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue !== '') {
            setListItems([...listItems, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoAdd;
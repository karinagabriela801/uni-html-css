import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]);
            setInputValue(''); // Eingabefeld leeren
        }
    };

    return (
        <div>
            <h1>To-Do Liste</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Neues To-Do"
            />
            <button onClick={addTodo}>Hinzufügen</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

import { useState, useEffect } from 'react';

import './App.css'

function App2() {
    const [items, setItems] = useState([])
    const [name, setName] = useState("Choose");

    const handleSetName = (name) => {
        setName(name)
    }

    useEffect(() => {
        const fetchName = async () => {
            const response = await fetch( (name === "Choose") ? 
                `https://jsonplaceholder.typicode.com/` : `https://jsonplaceholder.typicode.com/${name}?_limit=5`
            );
            const responseJson = await response.json();
            setItems(responseJson);
        };
        fetchName();
    }, [name]) 

  return (
    <div className='App'>
        <h1>{name}</h1>
        <div>
            <button onClick={() => handleSetName("posts")}>posts</button>
            <button onClick={() => handleSetName("comments")}>comments</button>
            <button onClick={() => handleSetName("todos")}>todos</button>
        </div>
        {items.map((item) => (
        <p>{item.title ? item.title : item.name}</p>
        ))}
    </div>

  );
}

export default App2;

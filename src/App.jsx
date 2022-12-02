import { useEffect } from 'react';
import { useState } from 'react';

import './App.css'

function App() {

    const [state, setState] = useState(0);
    const [state2, setState2] = useState(0);

    const handleButton = () => {
        setState((prevState) => prevState + 1);
    };
    const handleButton2 = () => {
        setState2((prevState) => prevState + 1)
    };

    useEffect(() => {
        document.title = `You clicked ${state} times`;
    })

  return (
    <div className='App'>
        <h1>Hello world!</h1>
        <p>{state}</p>
        <p>{state2}</p>
        <div>
            <button onClick={handleButton}>Adicionar</button>
            <button onClick={handleButton2}>Adicionar 2</button>
        </div>
    </div>
  );
}

export default App;

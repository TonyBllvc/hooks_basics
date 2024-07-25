import React, { useState } from 'react'

const StateThree = () => {
    // with destructuring 
    const [counter, setCounter ] = useState(0);
    const [name, setName ] = useState('This');

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div className='create'>
            <h1> A typical counter With Destructuring & input</h1>
            <input type="text" onChange={e => setName(e.target.value)} />
            <h2> {name} has clicked {counter} times</h2>
            <button onClick={increment} > Increase </button>

        </div>
    )
}

export default StateThree;

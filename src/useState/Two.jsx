import React, { useState } from 'react'

const StateTwo = () => {
    // with destructuring 
    const [counter, setCounter ] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div className='create'>
            <h1> A typical counter With Destructuring</h1>
            <h2> Counter {counter}</h2>
            <button onClick={increment} > Increase </button>

        </div>
    )
}

export default StateTwo;

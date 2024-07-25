import React, { useState } from 'react'

const StateOne = () => {
    // without destructuring 
    const array = useState(0);
    const counter = array[0];
    const setCounter = array[1];

    function increment() {
        setCounter(counter + 1);
    }

    console.log(array);
    return (
        <div className='create'>
            <h1> A typical counter without destructuring</h1>
            <h2> Counter {counter}</h2>
            <button onClick={increment} > Increase </button>

        </div>
    )
}

export default StateOne;

import React, { useState } from 'react'

// the main focus of this program is for in the console
const StateFour = () => {
    // with destructuring 
    const [details, setDetails] = useState(
        { counter: 0, name: 'John' }
    );

    function increment() {
        // //This counts, but does nut how a name
        // setDetails({counter: details.counter + 1});

        // this on the other hand
        setDetails((prev) => ({
            ...prev, counter: prev.counter + 1
        }))
    }

    // console.log(details);
    return (
        <div className='create'>
            <h1> Just for counting</h1>
            <input type="text" onChange={e => e.target.value} />
            <h2> {details.name} has clicked {details.counter} times</h2>
            <button onClick={increment} > Increase </button>

        </div>
    )
}

export default StateFour;

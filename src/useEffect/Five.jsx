import React, { useEffect, useState } from 'react'

// Not functioning in console. Check up later
const EffectFive = () => {
    // with destructuring 
    const [count, setCount ] = useState(0);

    useState(() => {
        console.log('Run useEffect', count);

        return () => {
            console.log('Clean up', count);
        }
    }, [count])

    // console.log(details);
    return (
        <div className='create'>
            <h1> Clean up in useEffect </h1>
            <h2> Count { count } </h2>
            <button onClick={() => setCount(count + 1)} > Count </button>

        </div>
    )
}

export default EffectFive;

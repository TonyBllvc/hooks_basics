import React, { useEffect, useState } from 'react'

const EffectOne = () => {
    // with destructuring 
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `${count} new messages:`;
    }, [count])

    // console.log(details);
    return (
        <div className='create'>
            <h1> useEffect </h1>
            <h2> { count } new Messages </h2>
            <button onClick={() => setCount(count + 1)} > Count </button>

        </div>
    )
}

export default EffectOne;

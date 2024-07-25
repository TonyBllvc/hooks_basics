import React, { useEffect, useState } from 'react'

const EffectThree = () => {
    // with destructuring 
    const [time, setTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setTime(time + 1);

        }, 1000);
    }, [])

    // console.log(details);
    return (
        <div className='create'>
            <h1> Clean up in useEffect </h1>
            <h2> { time } new Messages </h2>
            {/* <button onClick={() => setCount(count + 1)} > Count </button> */}

        </div>
    )
}

export default EffectThree;

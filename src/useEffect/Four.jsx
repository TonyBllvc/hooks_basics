import React, { useEffect, useState } from 'react'

const EffectFour = () => {
    // with destructuring 
    const [time, setTime] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1);
        }, 1000)
        return () => {
            clearInterval(timer);
        }
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

export default EffectFour;

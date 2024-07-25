import { useEffect, useRef, useState } from "react";

const RefOne = () => {
    const [name, setName] = useState('');
    const count = useRef(0);


    useEffect(() => {
        count.current = count.current + 1;
    })

    // console.log(count);
    // because this causes an infinite loop in count
    //     const [ count, setCount ] = useState(0);

    //     useEffect(() => {
    //         setCount(prev => prev + 1)
    //     }, [])
    // |
    return (
        <div className="create">
            <input type="text" onChange={e => setName(e.target.value)} />
            <h2> Name: {name}</h2>
            <h2> Renders: {count.current}</h2>
        </div>
    );
}

export default RefOne;
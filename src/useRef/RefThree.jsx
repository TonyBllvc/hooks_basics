import { useEffect, useRef, useState } from "react";

const RefThree = () => {
    const [inputValue, setInputValue] = useState('');
    const prevInputVal = useRef('');

    useEffect(() => {
        prevInputVal.current = inputValue;
    }, [inputValue])

    return (
        <div className="create">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <h2> Current Val: {inputValue}</h2>
            <h2> Prev Value: {prevInputVal.current}</h2>
        </div>
    );
}

export default RefThree;
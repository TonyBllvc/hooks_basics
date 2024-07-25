import { useEffect, useRef, useState } from "react";


const RefTwo = () => {
    const inputEle = useRef()

    const handleClick = () =>{
        // to see all the methods that can be applied to an element
        console.log(inputEle)
        // to focus 
        // inputEle.current.focus();
        // to disable
        inputEle.current.disabled = true;
        // to change input width
        inputEle.current.style.width = '20px';
        // console.log(inputEle.current);
    };

    return ( 
        <div className="create">
        <h1> To directly access the DOM elements</h1>
            <input type="text" ref={inputEle} />
            <button onClick={handleClick} > Click Me </button>
        </div>
     );
}
 
export default RefTwo;
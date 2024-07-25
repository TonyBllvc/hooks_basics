// this function is not clear 
// recap this component again
import { useMemo, useState } from "react";

const MemoOne = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const memoCalculation = useMemo(() => {
        return expensiveFunction(number)
    }, [number])

    // const calculation = expensiveFunction(number);
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    return (
        <div style={cssStyle}>
            <input type="number"
                onChange={(e) => setNumber(e.target.valueAsNumber)}
                value={number}
            />
            <h2 style={cssStyle}> Calculation: {memoCalculation}</h2>
            <button onClick={(e) => setDark(!dark)}> Toggle</button>

        </div>
    );
}

function expensiveFunction(num) {
    console.log('Loop Started');
    for (let i = 0; i < 10000000; i++) { }
    return num;
}

export default MemoOne;



// import { useMemo, useState } from "react";

// const MemoOne = () => {
//     const [number, setNumber] = useState(0);
//     const [dark, setDark] = useState(false);

//     useMemo(() => {
//         return expensiveFunction(number)
//     }, [number])

//     const calculation = expensiveFunction(number);
//     const cssStyle = {
//         backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black"
//     }

//     return (
//         <div style={cssStyle}>
//             <input type="number"
//                 onChange={(e) => setNumber(e.target.valueAsNumber)}
//                 value={number}
//             />
//             <h2 style={cssStyle}> Calculation: {calculation}</h2>
//             <button onClick={(e) => setDark(!dark)}> Toggle</button>

//         </div>
//     );
// }

// function expensiveFunction(num) {
//     console.log('Loop Started');
//     for (let i = 0; i < 10000000; i++) { }
//     return num;
// }

// export default MemoOne;
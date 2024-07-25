 import { useCallback, useMemo, useState } from "react";
import PrintTable from "./components/PrintTable";

const CallbackOne = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const calculateTable = useCallback( (value) => {
        let newNum = number + value;
        return [newNum * 1, newNum * 2, newNum * 3, newNum * 4, newNum * 5]
    }, [number])

    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    return (
        <div style={cssStyle} className='create'>
            <input type="number"
                onChange={(e) => setNumber(e.target.valueAsNumber)}
                value={number}
            />
            {/* <h2 style={cssStyle}> Calculation: {memoCalculation}</h2> */}
            <button onClick={(e) => setDark(!dark)}> Toggle</button>
            <PrintTable calculateTable={calculateTable} />

        </div>
    );
}

// function expensiveFunction(num) {
//     console.log('Loop Started');
//     for (let i = 0; i < 10000000; i++) { }
//     return num;
// }

export default CallbackOne;















//  // this function is not clear 
// // recap this component again
// import { useMemo, useState } from "react";
// import PrintTable from "./components/PrintTable";

// const CallbackOne = () => {
//     const [number, setNumber] = useState(0);
//     const [dark, setDark] = useState(false);

//     const cssStyle = {
//         backgroundColor: dark ? "black" : "white",
//         color: dark ? "white" : "black"
//     }

//     const calculateTable = () => {
//         return [number * 1, number * 2, number * 3, number * 4, number * 5]
//     }


//     return (
//         <div style={cssStyle} className='create'>
//             <input type="number"
//                 onChange={(e) => setNumber(e.target.valueAsNumber)}
//                 value={number}
//             />
//             {/* <h2 style={cssStyle}> Calculation: {memoCalculation}</h2> */}
//             <button onClick={(e) => setDark(!dark)}> Toggle</button>
//             <PrintTable calculateTable={calculateTable} />

//         </div>
//     );
// }

// // function expensiveFunction(num) {
// //     console.log('Loop Started');
// //     for (let i = 0; i < 10000000; i++) { }
// //     return num;
// // }

// export default CallbackOne;

// Documentation: 
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    // to view on console, the object property
    console.log(action);
    return { count: state.count + 1};
}



const ReducerOne = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => {
        dispatch({ type: 'increase '});
        // setCount((prev) => prev + 1);
    }

    const decrease = () => {

        // setCount((prev) => prev - 1);
    }

    return (
        <div className="create">
            <h1> Use Reducer for counter component </h1>
            <h2> Count: { state.count }</h2>
            <button onClick={increase} > Increase </button>
            {/* <button onClick={decrease} > Decrease </button> */}
        </div>
    );
}

export default ReducerOne;
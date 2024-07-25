
// Documentation: 
import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { count: state.count + 1 }; 
        case 'decrease':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const ReducerTwo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => {
        dispatch({ type: 'increase ' });
        // setCount((prev) => prev + 1);
    }

    const decrease = () => {
        dispatch({ type: 'decrease ' });

        // setCount((prev) => prev - 1);
    }

    return (
        <div className="create">
            <h1> Use Reducer for counter component </h1>
            <h2> Count: {state.count}</h2>
            <button onClick={increase} > Increase </button>
            <button onClick={decrease} > Decrease </button>
        </div>
    );
}

export default ReducerTwo;
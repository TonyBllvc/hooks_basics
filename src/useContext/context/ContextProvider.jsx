import { createContext } from "react";
import MainComponent from "../samples/MainComponents";

// This work is not proven
export const LoginContext = createContext();

const ContextProvider = () => {
    return (
        <LoginContext.Provider value={true }>
            {/* <div> */}
                <MainComponent />
            {/* </div> */}
        </LoginContext.Provider>
    );
}

export default ContextProvider;
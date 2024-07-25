import { useContext } from "react";
import { LoginContext } from "../context/ContextProvider";

// Child component 
// it is not proven yet
const SinglePost = () => {
    const login  = useContext(LoginContext);
    console.log(login);

    return ( 
        <div>
            <h1> Single Post </h1>
        </div>
     );
}
 
export default SinglePost;
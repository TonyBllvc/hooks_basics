// import { useEffect, useLayoutEffect, useRef, useState } from "react";


// // the aim of this code is defeated
// // so this code is inactive
// const LayoutEffectTwo = () => {
//     const [toggle, setToggle] = useState(false);
//     const textRef = useRef();

    
//     // useLayoutEffect runs before useEffect
//     useLayoutEffect(() => {
//     //     // to get all dimension of the element
//         if(textRef.current != null){
//             const dimension = textRef.current.getBoundingClientRect();
//             // console.log(dimension)
//             textRef.current.style.paddingTop = `${dimension.height}px`;
//         }
//     }, [toggle])

//     // useEffect(() => {
//         // if(textRef.current != null){
//             // const dimension = textRef.current.getBoundingClientRect();
//             // console.log(dimension);
//         // }
//     // }, );

//     return (
//         <div className="create">
//             <button onClick={() => setToggle(!toggle)}> Toggle </button>
//             {toggle && <h4> Menu </h4>}
//         </div>
//     );
// }

// export default LayoutEffectTwo;
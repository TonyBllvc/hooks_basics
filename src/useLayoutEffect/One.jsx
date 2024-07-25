import { useEffect, useLayoutEffect, useState } from "react";

const LayoutEffectOne = () => {
    const [toggle, setToggle] = useState(false);

    // useEffect(() => {

    // })

    // useLayoutEffect runs before useEffect
    useEffect(() => {
        console.log('useEffect')
    }, [toggle])

    useLayoutEffect(() => {
        console.log('useLayout')
    }, [toggle])

    return (
        <div className="create">
            <button onClick={() => setToggle(!toggle)}> Toggle </button>
            {toggle && <h4> Menu </h4>}
        </div>
    );
}

export default LayoutEffectOne;
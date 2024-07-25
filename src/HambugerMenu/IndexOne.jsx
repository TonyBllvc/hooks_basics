import { useEffect, useLayoutEffect, useState } from "react";

const ForClick = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <div className="create">
            <button onClick={() => setToggle(!toggle)}> Toggle </button>
            {toggle && <h4> Menu </h4>}
        </div>
    );
}

export default ForClick;
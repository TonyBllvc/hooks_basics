import './layout.css';
import { Link, NavLink } from "react-router-dom";


export default function Layout() {
    return (

        <nav className="navbar">
            <div className="head">
                <h1><NavLink to="/"> Uncle Black  </NavLink></h1>
            </div>
            <div className="linking">``
                <div className="linkingContain">
                    {/* <li className='list-anchor'><NavLink className="anchor" to="/">  </NavLink></li> */}
                    <li className='list-anchor'> Hooks One
                        <ul className="dropdown">
                            <li className='list-anchor'><NavLink className="anchor" to="/use_state_one"> State One </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_state_two"> State Two </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_state_three"> State Three </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_state_four"> State Four </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_effect_one"> Effect One </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_effect_three"> Effect Three </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_effect_four"> Effect Four </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_effect_five"> Effect Five </NavLink></li>
                        </ul>
                    </li>
                    <li className='list-anchor'> Hooks Two
                        <ul className="dropdown">
                            <li className='list-anchor'><NavLink className="anchor" to="/use_context_one"> Context One </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_ref_one"> Ref One </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_ref_two"> Ref Two </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_ref_three"> Ref Three </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_reducer_one"> Reducer One </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/use_reducer_two"> Context Hook </NavLink></li>
                            <li className='list-anchor'><NavLink className="anchor" to="/toggle"> Toggle </NavLink></li>
                            {/* <li className='list-anchor'><NavLink className="anchor" to="/context_one"> Context One</NavLink></li> */}
                            {/* <li className='list-anchor'><NavLink className="anchor" to="/context_two"> Context Two </NavLink></li> */}
                            {/* <NavLink className="anchor" to="/blogs"> Test</NavLink> */}
                        </ul>
                    </li>
                    <li className='list-anchor'> Hooks Three
                        <ul className="dropdown">
                            <li className='list-anchor'><NavLink className="anchor" to="use_layout_effect_one"> Layout Effect One </NavLink></li> 
                            <li className='list-anchor'><NavLink className="anchor" to="use_layout_effect_two"> Layout Effect Two </NavLink></li> 
                            <li className='list-anchor'><NavLink className="anchor" to="/use_memo_one"> Memo One </NavLink></li> 
                            <li className='list-anchor'><NavLink className="anchor" to="/use_callback"> Callback One </NavLink></li>
                        </ul>
                    </li>
                </div>
            </div>
        </nav>
    )
}











// export default function Layout() {
//     return (

//         <nav className="navbar">
//             <div className="head">
//                 <h1> Uncle Black </h1>
//             </div>
//             <div className="linking">
//                 <NavLink className="anchors" to="/"> Home </NavLink>
//                 <NavLink className="anchors" to="/posts"> New </NavLink>
//                 <NavLink className="anchors" to="/test"> Two </NavLink>
//                 <NavLink className="anchors" to="/redirecting"> Redirect </NavLink>
//                 <NavLink className="anchors" to="/listing"> Listing </NavLink>
//                 {/* <NavLink className="anchor" to="/blogs"> Test</NavLink> */}

//             </div>
//         </nav>
//     )
// }
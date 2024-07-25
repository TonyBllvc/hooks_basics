import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
//Page imports
import Home from './page/Home';
import NotFound from './page/NoPage';
import Layout from './Layout';
import Footer from './page/Footer';
import EffectOne from './useEffect/One';
import StateFour from './useState/Four';
import StateThree from './useState/Three';
import StateOne from './useState/One';
import StateTwo from './useState/Two';
import EffectThree from './useEffect/Three';
import EffectFour from './useEffect/Four';
import EffectFive from './useEffect/Five';
import MainComponent from './useContext/samples/MainComponents';
import RefOne from './useRef/RefOne';
import RefTwo from './useRef/RefTwo';
import RefThree from './useRef/RefThree';
import ReducerOne from './useReducer/One';
import ReducerTwo from './useReducer/Two';
import ForClick from './HambugerMenu/IndexOne';
import LayoutEffectOne from './useLayoutEffect/One';
import LayoutEffectTwo from './useLayoutEffect/Two';
import MemoOne from './useMemo/one';
import CallbackOne from './useCallback/One';

export default function App() {

  // Creation of router 
  return (
    <div className="AppContain">
      <BrowserRouter>
        {/* <Book /> */}
        <Layout />
        <div className="bodyContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use_state_one" element={<StateOne />} />
            <Route path="/use_state_two" element={<StateTwo />} />
            <Route path="/use_state_three" element={<StateThree />} />
            <Route path="/use_state_four" element={<StateFour />} />
            <Route path="/use_effect_one" element={<EffectOne />} />
            <Route path="/use_effect_three" element={<EffectThree />} />
            <Route path="/use_effect_four" element={<EffectFour />} />
            <Route path="/use_effect_five" element={<EffectFive />} />
            <Route path="/use_context_one" element={<MainComponent />} />
            <Route path="/use_ref_one" element={<RefOne />} />
            <Route path="/use_ref_two" element={<RefTwo />} />
            <Route path="/use_ref_three" element={<RefThree />} />
            <Route path="/use_reducer_one" element={<ReducerOne />} />
            <Route path="/use_reducer_two" element={<ReducerTwo />} />
            <Route path="/use_layout_effect_one" element={<LayoutEffectOne />} />
            <Route path="use_layout_effect_two" element={<LayoutEffectTwo />} />
            <Route path="use_memo_one" element={<MemoOne />} />
            <Route path="use_callback" element={<CallbackOne />} />
            <Route path="/toggle" element={<ForClick />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

  // export default App;




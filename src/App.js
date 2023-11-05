import Header from './Header/header';
import './Component/component.css';
import { Routes, Route } from 'react-router-dom';
import Singup from './Slide/Sing up';
import Body from './Body/body';
import { Fragment } from 'react';
import Bottom from './Bottom/bottom';
import Buy from './Slide/Buy/buy';
// import {Login} from './Slide/Log in';
// import { useEffect } from 'react';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Fragment>
                            <Header />
                            <Body />
                            <Bottom/>
                        </Fragment>
                    }
                ></Route>
                <Route path="/singup" element={<Singup />}></Route>
                <Route path="/donhang" element={<Buy />}></Route>
            </Routes>
        </div>
    );
}

export default App;

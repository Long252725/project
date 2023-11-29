import Home from './components/Home';
import LoginSuccess from './components/LoginSuccess';

import Header from './Header/header';
import './Component/component.css';
import { Routes, Route } from 'react-router-dom';
import Singup from './Slide/Sing up';
import Body from './Body/body';
import { Fragment } from 'react';
import Bottom from './Bottom/bottom';
import Buy from './Slide/Buy/buy';
import Profile from './Slide/Profile/profile';
import Details from './Slide/Details/details';
import Intro from './Slide/Introduce/introduce';
import Setting from './Slide/setting/setting';
import Settingprofile from './Slide/setting-profile/setting-profile';
import Settingpayment from './Slide/setting-payment/setting-payment';
import SettingAddress from './Slide/setting-address/setting-address';
import Bill from './Slide/Bill/bill';
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
                    <Bottom />
                        </Fragment>
                    }
                ></Route>
                <Route path="/signup" element={<Home />} />
                <Route path="/login-success/:userId/:tokenLogin" element={<LoginSuccess />} />
                <Route path="/singup" element={<Singup />}></Route>
                <Route path="/bill" element={<Bill />}></Route>
                <Route path="/chitiet" element={<Details />}></Route>
                <Route path="/gioithieu" element={<Intro />}></Route>
                <Route path="/setting" element={<Setting />}></Route>
                <Route path="/setting-profile" element={<Settingprofile />}></Route>
                <Route path="/setting-payment" element={<Settingpayment />}></Route>
                <Route path="/setting-address" element={<SettingAddress />}></Route>
                <Route
                    path="/profile"
                    element={
                        <Fragment>
                            <Header />
                            <Profile />
                            <Bottom />
                        </Fragment>
                    }
                ></Route>
                <Route path="/donhang" element={<Buy />}></Route>
            </Routes>
        </div>
    );
}

export default App;

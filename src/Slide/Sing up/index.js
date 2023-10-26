import { useEffect } from 'react';
import './style.css';
// import { Login } from '../Log in';
// import {btnLogin} from './../Log in/index'
// import { useEffect, } from 'react';
// let b = [];
// let c = [];
function Singup() {
    useEffect(() => {
        function hd() {
            let emailSingup = document.getElementById('infoSingup--email');
            let passSingup = document.getElementById('infoSingup--password');
            let warningAlert = document.getElementById('warning');
            let x = document.getElementById('inputSingup--input');
            let isTick = false;
            x.onchange = () => {
                isTick = !isTick
            };
            console.log(isTick)
            if (isTick) {
                function signUp(userMail, userPass) {
                    dataAccount.set(userMail, userPass);
                }
                signUp(emailSingup.value, passSingup.value);
                console.log(dataAccount);
                warningAlert.style.display = 'none';
                emailSingup.style.border = '1px solid #007af4';
                passSingup.style.border = '1px solid #007af4';
            } else {
                warningAlert.style.display = 'block';
                emailSingup.style.border = '1px solid red';
                passSingup.style.border = '1px solid red';
            }
        }

        function checkValidEmail(string) {
            let warningAlert = document.getElementById('warning');
            let emailSingup = document.getElementById('infoSingup--email');
            let passSingup = document.getElementById('infoSingup--password');
            let isCheck = false;
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!pattern.test(string)) {
                isCheck = false;
            } else {
                isCheck = true;
            }
            if (isCheck) {
                hd();
            } else {
                warningAlert.style.display = 'block';
                emailSingup.style.border = '1px solid red';
                passSingup.style.border = '1px solid red';
            }
        }

        let dataAccount = new Map();
        function handleAcc() {
            // let dataUser = new Map();
            // let arrId = ['userPhoneNumber', 'userAdDress', 'userPass'];
            let btnSingup = document.getElementById('btnAcc--singup');
            btnSingup.onclick = () => {
                let emailSingup = document.getElementById('infoSingup--email').value;
                // let passSingup = document.getElementById('infoSingup--password').value;
                checkValidEmail(emailSingup);
            };

            // login
            // function upData(userName) {}
            let btnLogin = document.getElementById('btnAcc--login');
            btnLogin.onclick = () => {
                let errorAlert = document.getElementById('error');
                let emailLogin = document.getElementById('infoSingup--email');
                let passLogin = document.getElementById('infoSingup--password');
                function logIn(inpMail, inpPass) {
                    if (dataAccount.get(inpMail)) {
                        let passPre = dataAccount.get(inpMail);
                        if (passPre !== inpPass) {
                            emailLogin.style.border = '1px solid red';
                            passLogin.style.border = '1px solid red';
                            errorAlert.style.display = 'block';
                        } else {
                            // upData(inpName);
                            errorAlert.style.display = 'none';
                            emailLogin.style.border = '1px solid #007af4';
                            passLogin.style.border = '1px solid #007af4';
                        }
                    } else {
                        console.log('Invalid Name!');
                    }
                }
                logIn(emailLogin.value, passLogin.value);
            };
        }
        handleAcc();
    }, []);

    // Singup/Login

    // const [userInfo, setuserInfo] = useState();
    // const singUp = () => {
    //     let emailSingup = document.getElementById('infoSingup--email');
    //     let passSingup = document.getElementById('infoSingup--password');
    //     setuserInfo({
    //         email: emailSingup.value,
    //         pass: passSingup.value,
    //     });

    // };
    // const [userInfolog, setuserInfolog] = useState();
    // const logIn = () => {
    //     let emailLogin = document.getElementById('infoSingup--email');
    //     let passLogin = document.getElementById('infoSingup--password');
    //     setuserInfolog({
    //         email: emailLogin.value,
    //         pass: passLogin.value,
    //     });
    // };

    // function handleUser() {
    // let errorAlert = document.getElementById('error')
    // let emailSingup = document.getElementById('infoSingup--email');
    // let passSingup = document.getElementById('infoSingup--password');
    //     if (userInfo !== undefined && userInfolog !== undefined) {
    //         b.push(userInfo);
    //         c.push(userInfolog);
    //         for (let i = 0; i < b.length; i++) {
    //             console.log(b[i])
    //             for (let j = 0; j < c.length; j++) {
    //                 console.log(c[j])

    //                 if (c[j].email === b[i].email && c[j].pass === b[i].pass) {
    //                     console.log('ok');
    //                 } else {
    // errorAlert.style.display = "block"
    // emailSingup.style.border = "1px solid red"
    // passSingup.style.border = "1px solid red"
    //                 }
    //             }
    //         }
    //     }
    // }
    // handleUser();

    return (
        <div>
            <div className="singup">
                <div className="boxSingup">
                    <h1>Sign up - Log in</h1>
                    <div className="infoSingup">
                        <input
                            className="inputSingup infoSingup--email"
                            id="infoSingup--email"
                            type="text"
                            placeholder="Email"
                        ></input>
                        <input
                            className="inputSingup infoSingup--password"
                            id="infoSingup--password"
                            type="password"
                            placeholder="Mật Khẩu"
                        ></input>
                        <label className="infoSingup--notice">
                            {' '}
                            <input type="checkbox" className="inputSingup--input" id="inputSingup--input"></input> Đồng
                            ý với mọi điều khoản cung cấp
                        </label>
                    </div>
                    <div className="btnAcc">
                        <button className="btnAcc_all btnAcc--singup" id="btnAcc--singup">
                            Đăng ký
                        </button>

                        <button className="btnAcc_all btnAcc--login" id="btnAcc--login">
                            Đăng nhập
                        </button>
                    </div>
                    <a href="/d" className="forgetmk">
                        Quên mật khẩu ?
                    </a>
                    <div className="error" id="error">
                        Sai tài khoản hoặc mật khẩu
                    </div>
                    <div className="warning" id="warning">
                        Email không chuẩn !
                    </div>
                    <div className="picSingup"></div>
                </div>
            </div>
        </div>
    );
}

export default Singup;

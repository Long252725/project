import { useEffect, useState } from 'react';
import './style.css';
function Login2() {
    const [users, setUsers] = useState([])
useEffect(()=> {
    let inputUsername = document.getElementById('infoSingup--username')
    let inputEmail = document.getElementById('infoSingup--email')
    let inputPass = document.getElementById('infoSingup--pass')
    let btnSigup = document.getElementById('btnAcc--singup')
    // console.log(users)
    var a = []
    btnSigup.onclick = ()=> {
        let ob = new Object()
        ob.username = inputUsername.value
        ob.email = inputEmail.value
        ob.pass = inputPass.value
        a.push(ob)
        console.log(a[0].email)
        console.log(ob)
        getInfo()
    }
    function getInfo() {
        fetch('http://localhost:3000/user')
        .then(res => res.json())
        .then(users => setUsers(users))
    }
    function app(){
        console.log(a[0].email)
        console.log(users)
        for (let i = 0; i< users.length; i++) {
        }
       
    }
    app()
}, [users])
    return (
        <div>
            <div className="singup">
                <div className="boxSingup">
                    <h1>Sign up - Log in</h1>
                    <div className="infoSingup">
                        <input
                            className="inputSingup infoSingup--username"
                            id="infoSingup--username"
                            placeholder="Username"
                        ></input>
                        
                        
                        <input
                            className="inputSingup infoSingup--email"
                            id="infoSingup--email"
                            type="text"
                            placeholder="Email"
                        ></input>
                        <input
                            className="inputSingup infoSingup--password"
                            id="infoSingup--pass"
                            type="password"
                            placeholder="Mật Khẩu"
                        ></input>
                       
                    </div>
                    <div className="btnAcc">
                        <button className="btnAcc_all btnAcc--singup" id="btnAcc--singup">
                            Đăng ký
                        </button>

                        <button className="btnAcc_all btnAcc--login" id="btnAcc--login">
                            Đăng nhập
                        </button>
                    </div>
                    <a href="/d" className="forgetmk" id="forgetmk">
                        Quên mật khẩu ?
                    </a>
                    <div className="error" id="error"></div>

                    <div className="picSingup">
                        <div className="picSingup_logo"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login2;

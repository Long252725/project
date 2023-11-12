import { useEffect } from 'react';
import './style.css';
function Singup2() {

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
                            id="infoSingup--password"
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

export default Singup2;

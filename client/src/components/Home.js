import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetOne } from '../apis/userService';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn, token } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState({});

    const handleLogin = (type) => {
        window.open(`http://localhost:5000/api/auth/${type}`, '_self');
    };

    useEffect(() => {
        const fetchUser = async () => {
            let response = await apiGetOne(token);
            console.log(response);
            if (response?.data.err === 0) {
                setUserData(response.data?.response);
            } else {
                setUserData({});
            }
        };
        fetchUser();
    }, [isLoggedIn]);

    useEffect(() => {
        const containerSignup = document.getElementById('container_signup');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        registerBtn.addEventListener('click', () => {
            containerSignup.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            containerSignup.classList.remove('active');
        });
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px' }}>
            <div>
                {isLoggedIn ? (
                    <button type="button" className="btn btn-danger" onClick={() => dispatch(logout())}>
                        Đăng xuất
                    </button>
                ) : (
                    <div className="Signupbox">
                        {/* <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>
                            Đăng nhập
                        </button> */}
                        <div className="container_signup" id="container_signup">
                            <div className="form-container sign-up">
                                <form>
                                    <h1>Create Account</h1>
                                    <div className="social-icons">
                                        <button type="button" class="icon" onClick={() => handleLogin('google')}>
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </button>
                                        <button type="button" class="icon" onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                        <button type="button" class="icon" onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                        <button type="button" class="icon " onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                    </div>
                                    <span>hoặc sử dụng email của bạn để đăng ký</span>
                                    <input type="text" placeholder="Name"></input>
                                    <input type="email" placeholder="Email"></input>
                                    <input type="password" placeholder="Password"></input>
                                    <a href='https://fontawesome.com/icons/google?f=brands&s=solid' className="signup_title">Đăng ký</a>
                                </form>
                            </div>
                            <div className="form-container sign-in">
                                <form>
                                    <h1>Đăng nhập</h1>
                                    <div className="social-icons">
                                        <button type="button" class="icon" onClick={() => handleLogin('google')}>
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </button>
                                        <button type="button" class="icon" onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                        <button type="button" class="icon" onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                        <button type="button" class="icon" onClick={() => handleLogin('facebook')}>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </button>
                                    </div>
                                    <span>hoặc sử dụng mật khẩu email của bạn</span>
                                    <input type="email" placeholder="Email"></input>
                                    <input type="password" placeholder="Password"></input>
                                    <a className='tag-a' href="#">Quên mật khẩu ?</a>
                                    <a href='./' className="signup_title">Đăng nhập</a>
                                </form>
                            </div>
                            <div className="toggle-container">
                                <div className="toggle">
                                    <div className="toggle-panel toggle-left">
                                        <h1>Welcome Back!</h1>
                                        <p>Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
                                        <button className="hidden signup_title" id="login">
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className="toggle-panel toggle-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Register with your personal details to use all of site features</p>
                                        <button className="hidden signup_title" id="register">
                                            Đăng ký
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h4>{userData?.name}</h4>
                <h4>{userData?.email}</h4>
                {userData?.avatarUrl && (
                    <img
                        src={userData?.avatarUrl}
                        alt="avatar"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;

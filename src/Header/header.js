import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Header() {
    useEffect(() => {
        function handleMenu() {
            let menu = document.getElementById('menu');
            let menuChoice = document.getElementById('menu_choice');
            let lopPhu = document.getElementById('lopphu');
            menu.onclick = () => {
                menuChoice.style.display = 'block';
                lopPhu.style.display = 'block';
            };
            lopPhu.onclick = () => {
                menuChoice.style.display = 'none';
                lopPhu.style.display = 'none';
            };
        }
        handleMenu();
    }, []);
    return (
        <div>
            <div className="header">
                <div className="header_pic"></div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="iconSearch" />
                <input id="search" placeholder="Tìm kiếm"></input>
                <div id="accountBox">
                    <a href="/singup" className="aOfheader">
                        <div className="accountBox_sl accountBox_sl--singup">Đăng ký / Đăng nhập</div>
                    </a>

                    <div className="menu accountBox_sl" id="menu">
                        <FontAwesomeIcon icon={faHouse} className="iconmenu" />
                        Home
                    </div>
                </div>

                <div className="menu_choice" id="menu_choice">
                    <div className="menu_choice_account">
                        <div className="menu_choice_account--pic"></div>
                        <div className="menu_choice_account--name">Nguyễn Thành Long</div>
                        <div className="menu_choice_account--note">
                            Admin <i class="fa-solid fa-circle-check" style={{ color: '#4884ea' }}></i>{' '}
                        </div>
                    </div>
                    <div className="menu_choice_cointainer">
                        <a href='/'>
                            <div className="menu_choice_cointainer_select menu_choice_cointainer--home">
                                <i class="fa-solid fa-house left"></i> Trang chủ
                            </div>
                        </a>
                        <a href='/donhang'>
                            <div className="menu_choice_cointainer_select menu_choice_cointainer--product">
                                <i class="fa-brands fa-product-hunt left"></i>Đơn hàng
                            </div>
                        </a>
                        <div className="menu_choice_cointainer_select menu_choice_cointainer--his">
                            <i class="fa-solid fa-clock-rotate-left left"></i>Lịch sử
                        </div>
                        <div className="menu_choice_cointainer_select menu_choice_cointainer--profile">
                            <i class="fa-solid fa-user left"></i>Profile
                        </div>
                        <div className="menu_choice_cointainer_select menu_choice_cointainer--like">
                            <i class="fa-solid fa-star left"></i>Yêu thích
                        </div>
                        <div className="menu_choice_cointainer_contact">
                            <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--title">
                                Liên hệ với chúng tôi
                            </div>
                            <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--face">
                                <i class="fa-brands fa-facebook"></i> Facebook
                            </div>
                            <div className="menu_choice_cointainer_contact_select menu_choice_cointainer_contact_select--x">
                                <i class="fa-brands fa-twitter"> </i> Twitter
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lopphu" id="lopphu"></div>
        </div>
    );
}

export default Header;

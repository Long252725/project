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
                    </div>
                </div>
            </div>
            <div className="lopphu" id="lopphu"></div>
        </div>
    );
}

export default Header;

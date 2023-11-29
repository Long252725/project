import Bottom from '../../Bottom/bottom';
import Header from '../../Header/header';
import './setting.css';
function Setting() {
    return (
        <div className="setting">
            <Header />
            <div className="setting_cointainer">
                <div className="setting_box ">
                    <div className="setting_taskbar">
                        <div className="setting_taskbar_title">
                            <i class="fa-solid fa-user left"></i>Tài khoản của tôi
                        </div>
                        <div className="setting_taskbar_box">
                            <a href="setting-profile">
                                <div className="setting_taskbar_box_select">Hồ sơ</div>
                            </a>
                            <a href="setting-payment">
                                <div className="setting_taskbar_box_select">Ngân hàng</div>
                            </a>
                            <a href='setting-address'><div className="setting_taskbar_box_select">Địa chỉ</div></a>
                            <div className="setting_taskbar_box_select">Đổi mật khẩu</div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </div>
    );
}

export default Setting;

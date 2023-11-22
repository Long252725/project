
import Setting from '../setting/setting';
import './setting-profile.css';
function Settingprofile() {
    return (
        <div className="setting-profile">
           <div  className='setting_profile_box'>
                <div className="setting-profile_cointainer">
    
                    <div className="setting-profile_top">
                        <div className="setting-profile_top_title">Hồ sơ của tôi</div>
                        <div className="setting-profile_top_second">Quản lý thông tin bảo mật tài khoản của bạn</div>
                    </div>
                    <div className="setting-profile_body">
                        <div className="setting-profile_body_main">
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_name">Tên đăng nhập</div>
                                <div className="setting-profile_body_main_namereal">Long252725</div>
                            </div>
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_fullname">Tên: </div>
                                <input className="setting-profile_body_main_fullnamereal" placeholder={"Nguyễn Thành Long"}></input>
                            </div>
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_email">Email: </div>
                                <div className="setting-profile_body_main_emailreal">inthanhlong2006@gmail.com</div>
                            </div>
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_sdt">Số điện thoại</div>
                                <div className="setting-profile_body_main_sdtreal">09234278462347</div>
                            </div>
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_gen">Giới tính</div>
                                <input className="setting-profile_body_main_genreal" placeholder='Nam'></input>
                            </div> 
                            <div className="setting-profile_body_main_select">
                                <div className="setting-profile_body_main_bird">Ngày sinh</div>
                                <input className="setting-profile_body_main_birdreal" placeholder='10/07/2006'></input>
                            </div>
                        </div>
                    </div>
                    <button className='setting-profile_save'>Lưu</button>
                    <div className='setting-profile_pic'></div>
                    <button  className='setting-profile_changepic'>Chọn ảnh</button>
                </div>
           </div>
            <Setting />
            
            
        </div>
    );
}

export default Settingprofile;

import './profile.css';
import { useEffect } from 'react';
function Profile() {
    useEffect(() => {
        function handleFixed() {
            window.onscroll = function () {
                let maxHeight = document.getElementById('profile_cointainer_box').clientHeight;
                var userBox = document.getElementById('profile_cointainer_box_user');
                    console.log(window.scrollY )
                if (window.scrollY > 148) {
                    console.log(maxHeight)
                    userBox.style.position = "fixed"
                    userBox.style.top = "30px"


                    if (window.scrollY > maxHeight - 390) {
                        userBox.style.position = "absolute"
                        userBox.style.top = ""
                        userBox.style.bottom = "10px"
                    } else {
                        userBox.style.position = "fixed"
                        userBox.style.top = "30px"
                        userBox.style.bottom = ""
                    }
                } else {
                    userBox.style.position = "absolute"
                    userBox.style.top = ""
                }
            };
        }
        handleFixed();
    }, []);
    return (
        <div className="profile">
            <div className="profile_cointainer">
                <div className="profile_cointainer_box" id='profile_cointainer_box'>
                    <div className="profile_cointainer_box_user" id="profile_cointainer_box_user">
                        <div className="profile_cointainer_box_user--name">Nguyễn Thành Long</div>
                        <div className="profile_cointainer_box_user--pic"></div>
                        <div className="profile_cointainer_box_user--username">
                            @long252725<i class="fa-solid fa-circle-check right" style={{ color: '#4884ea' }}></i>
                        </div>

                        <div className="profile_cointainer_box_user--star">Star: 100k</div>
                        <div className="profile_cointainer_box_user--chat">
                            <i class="fa-solid fa-comment-dots left"></i>Chat
                        </div>
                        <div className="profile_cointainer_box_user--diachi">
                            <i class="fa-solid fa-location-dot left"></i>Tp.Vinh
                        </div>
                        <div className="profile_cointainer_box_user--state">
                            <i class="fa-solid fa-heart left"></i>Trạng thái: Độc thân
                        </div>
                        <div className="profile_cointainer_box_user--details">
                            Người sáng lập, CEO và kỹ sư trưởng/nhà thiết kế của SpaceX, CEO và kiến trúc sư sản phẩm
                            của Tesla, Inc, người sáng lập The Boring Company, đồng sáng lập của Neuralink; đồng sáng
                            lập và đồng chủ tịch ban đầu của OpenAI. Long là người giàu nhất thế giới vào thời điểm hiện
                            tại, khi tài sản ròng của ông vượt mốc 273 tỷ đô la vào tháng 4 năm 2022.
                        </div>
                    </div>
                    <div className="profile_cointainer_box_posts" id="profile_cointainer_box_posts">
                        <a href="/">
                            <div className="profile_cointainer_box_posts_select">
                                <div className="profile_cointainer_box_posts_select--name">
                                    Laptop Gamming Lenovo Legion 5 Pro{' '}
                                </div>
                                <div className="profile_cointainer_box_posts_select--pic"></div>
                                <div className="profile_cointainer_box_posts_select--price">
                                    Giá:{' '}
                                    <div className="profile_cointainer_box_posts_select--price--price">100.000đ</div>
                                </div>
                                <div className="profile_cointainer_box_posts_select--boxdetails">
                                    <div className="profile_cointainer_box_posts_select--detailstitle">
                                        Chi tiết sản phẩm:{' '}
                                    </div>
                                    <div className="profile_cointainer_box_posts_select--detailscontent">
                                        Máy chính chủ dùng cẩn thận nên còn như mới
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="profile_cointainer_box_posts_select">
                                <div className="profile_cointainer_box_posts_select--name">
                                    Laptop Gamming Lenovo Legion 5 Pro{' '}
                                </div>
                                <div className="profile_cointainer_box_posts_select--pic"></div>
                                <div className="profile_cointainer_box_posts_select--price">
                                    Giá:{' '}
                                    <div className="profile_cointainer_box_posts_select--price--price">100.000đ</div>
                                </div>
                                <div className="profile_cointainer_box_posts_select--boxdetails">
                                    <div className="profile_cointainer_box_posts_select--detailstitle">
                                        Chi tiết sản phẩm:{' '}
                                    </div>
                                    <div className="profile_cointainer_box_posts_select--detailscontent">
                                        Máy chính chủ dùng cẩn thận nên còn như mới
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="profile_cointainer_box_posts_select">
                                <div className="profile_cointainer_box_posts_select--name">
                                    Laptop Gamming Lenovo Legion 5 Pro{' '}
                                </div>
                                <div className="profile_cointainer_box_posts_select--pic"></div>
                                <div className="profile_cointainer_box_posts_select--price">
                                    Giá:{' '}
                                    <div className="profile_cointainer_box_posts_select--price--price">100.000đ</div>
                                </div>
                                <div className="profile_cointainer_box_posts_select--boxdetails">
                                    <div className="profile_cointainer_box_posts_select--detailstitle">
                                        Chi tiết sản phẩm:{' '}
                                    </div>
                                    <div className="profile_cointainer_box_posts_select--detailscontent">
                                        Máy chính chủ dùng cẩn thận nên còn như mới
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

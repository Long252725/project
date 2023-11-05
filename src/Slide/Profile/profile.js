import Header from '../../Header/header';
import Bottom from '../../Bottom/bottom';
import './profile.css'
function Profile() {
    return ( <div className='profile'>
        <Header/>
        <div className='profile_cointainer'>
        <div className='profile_cointainer_box'>
            <div className='profile_cointainer_box_user'>
                <div className='profile_cointainer_box_user--name'>Nguyễn Thành Long</div>
                <div className='profile_cointainer_box_user--pic'></div>
                <div className='profile_cointainer_box_user--username'>@long252725<i class="fa-solid fa-circle-check right" style={{ color: '#4884ea' }}></i></div>

                <div className='profile_cointainer_box_user--star'>Star: 100k</div>
                <div className='profile_cointainer_box_user--chat'><i class="fa-solid fa-comment-dots left"></i>Chat</div>
                <div className='profile_cointainer_box_user--diachi'><i class="fa-solid fa-location-dot left"></i>Tp.Vinh</div>
                <div className='profile_cointainer_box_user--state'><i class="fa-solid fa-heart left"></i>Trạng thái: Độc thân</div>
                <div className='profile_cointainer_box_user--details'>Người sáng lập, CEO và kỹ sư trưởng/nhà thiết kế của SpaceX, CEO và kiến trúc sư sản phẩm của Tesla, Inc, người sáng lập The Boring Company, đồng sáng lập của Neuralink; đồng sáng lập và đồng chủ tịch ban đầu của OpenAI. Long là người giàu nhất thế giới vào thời điểm hiện tại, khi tài sản ròng của ông vượt mốc 273 tỷ đô la vào tháng 4 năm 2022.</div>
            </div>
            <div className='profile_cointainer_box_posts'></div>
        </div>
        </div>
        <Bottom/>
    </div> );
}

export default Profile;
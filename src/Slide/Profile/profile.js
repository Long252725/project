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
            </div>
            <div className='profile_cointainer_box_posts'></div>
        </div>
        </div>
        <Bottom/>
    </div> );
}

export default Profile;
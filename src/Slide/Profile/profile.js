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
                <div className='profile_cointainer_box_user--username'>@long252725</div>
                <div className='profile_cointainer_box_user--star'>Star: 100k</div>
            </div>
            <div className='profile_cointainer_box_posts'></div>
        </div>
        </div>
        <Bottom/>
    </div> );
}

export default Profile;
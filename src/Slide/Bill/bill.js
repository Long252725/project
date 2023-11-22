import Bottom from '../../Bottom/bottom';
import Header from '../../Header/header';
import './bill.css'
function Bill() {
    return ( <div className='bill'>
        <Header/>
        <div className='bill_cointainer'>
            <div className='bill_cointainer_box'></div>
        </div>
        <Bottom/>
    </div> );
}

export default Bill;
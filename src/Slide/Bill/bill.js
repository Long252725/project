import Bottom from '../../Bottom/bottom';
import Header from '../../Header/header';
import './bill.css';
function Bill() {
    return (
        <div className="bill">
            <Header />
            <div className="bill_cointainer">
                <div className="bill_cointainer_box bill_cointainer_box_address ">
                    <div className="bill_cointainer_box_address_title">
                        <i class="fa-solid fa-location-dot left"></i>Địa Chỉ Nhận Hàng
                    </div>
                    <div className="bill_cointainer_box_address_name">Nguyên Thành Long (0858997109)</div>
                    <div className="bill_cointainer_box_address_sdt"></div>
                    <div className="bill_cointainer_box_address_addr">
                        Nhà Văn Hóa, Xóm 11 Xuân Trung Nghi Đức, Xóm 11, Xã Nghi Đức, Thành Phố Vinh, Nghệ An
                    </div>
                </div>
                <div className="bill_cointainer_box bill_cointainer_box_sp">
                    <div className="bill_cointainer_box_sp_title">Sản phẩm</div>
                    <div className="bill_cointainer_box_sp_price_title">Đơn giá</div>
                    <div className="bill_cointainer_box_sp_sl_title">Số lượng</div>
                    <div className="bill_cointainer_box_sp_finish_title">Thành tiền</div>
                </div>
            </div>
            <Bottom />
        </div>
    );
}

export default Bill;

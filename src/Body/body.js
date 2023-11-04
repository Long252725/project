import './body.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Body() {
    const [posts, setposts] = useState([]);
    useEffect(()=> {
        
        function handletoTop() {
            let btntoTop = document.getElementById('to-top')
            btntoTop.onclick = ()=> {
                window.scrollBy(0, -window.innerHeight);
                
                
            }
           
        }
        handletoTop()
    }, [])
    useEffect(() => {
        function handlePost() {
            axios.get('http://localhost:3000/posts').then((posts) => {
                let postss = posts.data;
                setposts(postss);
            });
        }
        handlePost();
        function handleWatchlist() {
            let startList = [];
            let start = document.querySelectorAll('.product_save');
            
            for (let i = 0; i < start.length; i++) {
                start[i].addEventListener('click', (e) => {
                    let container = e.target.closest('.product');
                    let children = container.children;
                    let nameStar = children[0].textContent;
                    if (startList.includes(nameStar) === false) {
                        startList.push(nameStar);
                    }
                    var html = ``;
                    startList.map((startName) => {
                        return (html += `<li id="listproduct_like_select">${startName}</li>`);
                    });
                    document.querySelector('.listproduct_like').innerHTML = html;
                });
            }
        }
        handleWatchlist();
    }, [posts]);
    return (
        <div id="body">
          
            <div className="cointainer">
                <div className="taskbar_body">
                    <div className="box_search">
                        <div className="box_search_title">Xem thêm </div>
                        <input className="box_search_input" placeholder="Máy tính casio 580 cũ"></input>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="box_search_icon" />
                    </div>
                    <div className="boloc">
                        <div className="boloc_title font_big">Bộ lọc tìm kiếm</div>
                        <div className="bocloc_adress">
                            <div className="bocloc_adress--title font_normal ">Nơi bán</div>
                            <ul className="list">
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                                <li className="selecter">Nghệ An</li>
                            </ul>
                        </div>
                        <div className="bocloc_type">
                            <div className="bocloc_type--title font_normal ">Doanh mục</div>
                            <ul className="list">
                                <li className="selecter">Máy tính</li>
                                <li className="selecter">Đồ điện tử</li>
                                <li className="selecter">Mỹ phẩm</li>
                                <li className="selecter">Sách báo</li>
                                <li className="selecter">Dụn cụ</li>
                                <li className="selecter">Điện thoại</li>
                                <li className="selecter">Đồ chơi</li>
                                <li className="selecter">Máy tính</li>
                                <li className="selecter">Đồ điện tử</li>
                                <li className="selecter">Mỹ phẩm</li>
                                <li className="selecter">Sách báo</li>
                                <li className="selecter">Dụn cụ</li>
                                <li className="selecter">Điện thoại</li>
                                <li className="selecter">Đồ chơi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="listproduct">
                    <div className="listproduct_title">Yêu thích</div>
                    <div className="listproduct_like"></div>
                </div>
                <div className="box_product" id="box_product">
                    {posts.map((post, index) => {
                        return (
                            <div className="product" id="product" key={index}>
                                <div className="product_name" id="product_name">
                                    {post.name}
                                </div>
                                <FontAwesomeIcon icon={faBookmark} className="product_save" />
                                <div className="product_pic" id="product_pic"></div>
                                <div className="price" id="price">
                                    Giá niêm yết:{' '}
                                    <div className="price_price" id="price_price">
                                        {' '}
                                        {post.price}
                                    </div>
                                </div>
                                <button className=" btn_buy" id="btn_buy">
                                    {' '}
                                    Mua ngay
                                </button>
                                <button className=" btn_trade" id="btn_trade">
                                    {' '}
                                    Trao đổi miễn phí
                                </button>
                                <div className="content" id="content">
                                    Chi tiết sản phẩm
                                </div>
                                <div className="noidungchitiet" id="noidungchitiet">
                                    {post.detals}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div ><FontAwesomeIcon icon={faCircleUp} className="to-top" id='to-top' /></div>
        </div>
    );
}

export default Body;

import './body.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBookmark, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Player } from 'video-react';
import './../../node_modules/video-react/dist/video-react.css';

function Body(props) {
    const [posts, setposts] = useState([]);
    let startListObj = useRef([]);

    useEffect(() => {
        function handleStick() {
            window.onscroll = function () {
                let maxHeight = document.getElementById('cointainer').clientHeight;
                var taskbar = document.getElementById('taskbar_body');
                var startBox = document.getElementById('listproduct');

                if (window.scrollY > 150) {
                    taskbar.classList.add('sticky');
                    startBox.style.position = 'fixed';

                    if (window.scrollY > maxHeight - 490) {
                        taskbar.classList.remove('sticky');
                        taskbar.classList.add('sticky2');
                        startBox.style.position = 'absolute';
                        startBox.style.top = `${maxHeight - 626}px`;
                        startBox.style.right = '';
                    } else {
                        taskbar.classList.add('sticky');
                        taskbar.classList.remove('sticky2');
                        startBox.style.position = 'fixed';
                        startBox.style.top = '';
                        startBox.style.right = '140px';
                    }
                } else {
                    taskbar.classList.remove('sticky');
                    startBox.style.position = 'absolute';
                    startBox.style.right = '';
                }
            };
        }
        handleStick();
        function handletoTop() {
            let btntoTop = document.getElementById('to-top');
            btntoTop.onclick = () => {
                window.scrollTo(0, 0);
            };
        }
        handletoTop();
        function handleNextSp() {
            let btnNextSp = document.getElementById('next-sp');
            btnNextSp.onclick = () => {
                let cointainerHeight = document.getElementById('cointainer');
                cointainerHeight.style.maxHeight = `${cointainerHeight.clientHeight * 4}px `;
                console.log(cointainerHeight.clientHeight);
            };
        }
        handleNextSp();
    }, []);
    useEffect(() => {
        function handlePost() {
            axios.get('https://test-api-n3fv.onrender.com/posts').then((posts) => {
                let postss = posts.data;
                setposts(postss);
            });
        }
        handlePost();
        function handleWatchlist() {
            let startList = startListObj.current;
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
            
            <div className="cointainer" id="cointainer">
            
                <div className="taskbar_body" id="taskbar_body">
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
                                <li className="selecter">Dụng cụ</li>
                                <li className="selecter">Điện thoại</li>
                                <li className="selecter">Đồ chơi</li>
                                <li className="selecter">Tõi Se</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="listproduct" id="listproduct">
                    <div className="listproduct_title">Yêu thích</div>
                    <div className="listproduct_like"></div>
                </div>
                <button className="next-sp font_normal" id="next-sp">
                    Tiếp
                </button>
                <div className="box_product" id="box_product">
                    {posts.map((post, index) => {
                        return (
                            <div className="product" id="product" key={index}>
                                <div className="product_name" id="product_name">
                                    {post.name}
                                </div>
                                <FontAwesomeIcon icon={faBookmark} className="product_save" />
                                <div
                                    className="product_pic"
                                    id="product_pic"
                                    style={{
                                        backgroundImage: `url('${post.image}')`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
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
                                    {post.details}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faCircleUp} className="to-top" id="to-top" />
            </div>
            <div className="more">
                <div className="more_title">Otin Store - Không lo đồ cũ</div>
                <div className="more_video">
                    <Player
                        playsInline
                        poster="https://z-p3-scontent.fvii1-1.fna.fbcdn.net/v/t1.15752-9/394517794_6954486771313240_3684609075480503755_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=MaqX6WfeqsgAX9DaTej&_nc_ht=z-p3-scontent.fvii1-1.fna&oh=03_AdS0dqDtGgxY3cHBHnx4EcgXm83JVYiorYJtjo11Jj88Vw&oe=656EC986"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Body;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';


class Product extends Component {
    state = {  } 
    render() { 
    return (
        <div>
        <Header />

            <div>
            <section className="text-center bg-light p-5 font-size=50 mt-5" id="關於我們">

                <div >
                    <div id='標頭'>
                        <p className="p5=p-5" >
                            <h1>
                            到府一對一家教班
                            </h1>
                            <ul className='p-3 contain d-inline-block '>
                                <li>
                                8 堂行為問題調整<br />
                                </li>
                                <li>
                                6 堂幼犬訓練課<br />
                                </li>
                            </ul>
                        </p>

                        <p className="p5=p-5" >
                            <h1>
                            精緻團體班
                            </h1>
                            <ul className='p-3 contain d-inline-block '>
                                <li>
                                幼幼班（6 個月以下）<br />
                                </li>
                                <li>
                                基礎班（7 個月以上）<br />
                                </li>
                            </ul>
                        </p>
                    </div>

                    

                </div>



            </section>
                <div className='row '>
                    <div className="col-md-4 mb-4 text-center">
                        <div className="mx-auto" >
                            <div className="container mt-3 d-flex " >
                                <div className="card" >
                                <h3>到府一對一家教班<br />8 堂行為問題調整</h3>

                                <img src={'/images/dog01.png'}  style={{ height: "300px" }} alt='dogPicture'/>
                                <div><h2>$24,000/ 8 堂</h2></div>
                                <div className="card-body text-center " >
                                    <h4 className="card-title">改善狗狗行為問題</h4>
                                    <p className="card-text">亂大小便、嚴重吠叫、暴衝、追車、攻擊人或其他狗、破壞傢俱、緊張、不敢出門等等狀況</p>
                                    
                                    <h4 className="card-title">戶外散步課程</h4>
                                    <p className="card-text">社會化訓練、幫助狗狗情緒穩定讓狗狗和主人能自在的鬆繩散步</p>
                                    
                                    <h4 className="card-title">基本指令</h4>
                                    <p className="card-text">坐下、趴下、等待、喚回等等</p>
                                    
                                    <h4 className="card-title">才藝訓練</h4>
                                    <p className="card-text">歡迎與老師討論</p>

                                
                                
                                    <div className="">
                                    {/* <a href="" className="btn btn-primary  " >預約免費諮詢</a> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 text-center">
                        <div className="mx-auto" >
                            <div className="container mt-3 d-flex " >
                                <div className="card" >
                                <h3>到府一對一家教班<br />6 堂幼犬訓練課</h3>

                                <img src={'/images/dog02.png'}  style={{ height: "300px" }} alt='dogPicture'/>
                                <div><h2>$18,000/ 6 堂</h2></div>
                                <div className="card-body text-center " >
                                    <h4 className="card-title">社會化訓練</h4>
                                    <p className="card-text">幫助狗狗情緒穩定，適應生活中的刺激，
                                    如：人類的觸摸、剪指甲、美容等情境，不過度反應</p>
                                    
                                    <h4 className="card-title">改善幼犬行為問題</h4>
                                    <p className="card-text">幼犬咬手腳、大小便訓練等等</p>
                                    
                                    <h4 className="card-title">基本指令</h4>
                                    <p className="card-text">坐下、趴下、等待、喚回等等</p>
                                    
                                    <h4 className="card-title">感官開發</h4>
                                    <p className="card-text">學習思考、運用觸嗅視聽味等五感探索環境</p>

                                
                                
                                    <div className="">
                                    {/* <a href="" className="btn btn-primary  " >預約免費諮詢</a> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 text-center">
                        <div className="mx-auto" >
                            <div className="container mt-3 d-flex " >
                                <div className="card" >
                                <h3>精緻團體班<br />團體課程</h3>

                                <img src={'/images/dog03.png'}  style={{ height: "300px" }} alt='dogPicture'/>
                                <div><h2>$9,000/ 6 堂</h2></div>
                                <div className="card-body text-center " >
                                    <h4 className="card-title">台中市南屯區固定地點授課</h4>
                                    <p className="card-text">團體班課程依照當期課表進行，
                                    以基礎訓練知識、日常照護、提升狗狗思考、情緒控制、適應環境為主。</p>
                                    
                                    <h4 className="card-title">上課時數</h4>
                                    <p className="card-text">每堂 75 分鐘，共 6 堂課（每週一堂，為期 6 週）</p>
                                    
                                    <h4 className="card-title">班級人數</h4>
                                    <p className="card-text">每班至多 3 隻狗狗每隻狗狗至多 2 位家長上課</p>
                                    
                                    <h4 className="card-title">班別</h4>
                                    <p className="card-text">幼幼班（6 個月以下）基礎班（7 個月以上）</p>

                                
                                
                                    <div className="">
                                    {/* <a href="" className="btn btn-primary  " >預約免費諮詢</a> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='text-center'>
                服務流程全透明<br />
                課程常見問題
                </div>

                <div className='row '>
                    <div className="col-sm-6">


                    </div>

                </div>
                
            </div>




        <Footer />
        </div>

    );
    }
}
 
export default Product;
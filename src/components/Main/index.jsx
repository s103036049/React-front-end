import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';



class Main extends Component {
    state = {  } 
    render() { 
        return (
        <div>
        <Header />
        <main>
        <div className="row bg-white p-0" >
            <section className="text-center bg-light p-5 font-size=50 mt-5" id="關於我們">

                <div data-aos="fade-up" data-aos-duration="3000">
                    <img src={'/images/mainbig.jpeg'} style={{ height: "500px" }} alt='dogPicture' />
                    
                    <p className="p5=p-5" >
                        <h1>
                        全心犬意，打造幸福心關係
                        </h1>
                        用愛、同理心，和你一起改善狗狗行為問題<br />
                        已成功協助超過 800 位家長跟毛小孩<br />
                        透過行為調整，與狗狗一起迎接美好的生活<br />
                    </p>
                </div>

            </section>

            

            <section>

        <div className="container d-flex justify-content-center " data-aos="fade-up"
        data-aos-duration="3000" id="新品上市" >
            <div className="row ">
                <div className="col-md-4 mb-4">
                    <div className="mx-auto" >
                        <div className="container mt-3 d-flex " >
                            <div className="card" >
                            <img src={'/images/dog01.png'}  style={{ height: "300px" }} alt='dogPicture'/>
                            <div className="card-body text-center " >
                                <h4 className="card-title">攻擊、追車、追人</h4>
                                <p className="card-text">毛孩的情緒陰晴不定，有時會被咬到打洞流血，甚至撕裂傷嗎？或是在外遇到狗狗、車子會很生氣無法控制嗎？</p>
                                <div className="">
                                <Link to="/product" className="btn btn-primary  " >了解更多</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mx-auto" >
                        <div className="container mt-3 d-flex " >
                            <div className="card" >
                            <img src={'/images/dog02.png'} style={{ height: "300px" }} alt='dogPicture'/>
                            <div className="card-body text-center " >
                                <h4 className="card-title">大小便問題</h4>
                                <p className="card-text">剛帶回家的毛孩總是到處大小便，
                                不在固定的地方上廁所嗎？或是主人離開家，
                                毛孩就會隨意大小便，造成您很大的困擾嗎？</p>
                                <div className="">
                                <Link to="/product" className="btn btn-primary  " >了解更多</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="mx-auto" >
                        <div className="container mt-3 d-flex " >
                            <div className="card" >
                            <img src={'/images/dog03.png'} style={{ height: "300px" }} alt='dogPicture'/>
                            <div className="card-body text-center " >
                                <h4 className="card-title">吠叫問題</h4>
                                <p className="card-text">因為外在影響（電鈴、車聲等等）或是人離開家中後產生的吠叫，
                                總是造成鄰居的困擾嗎？</p>
                                <div className="">
                                <Link to="/product" className="btn btn-primary  " >了解更多</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>  




            </section>

            {/* <section>
            <div className="container-fluid mt-4  bg-info p-3 " data-aos="fade-up"
            data-aos-duration="3000" id="其他好康">
                <div className="row " >
                    <div className="col-sm-6  text-center justify-content p-5 align-items-*">
                        <div className="d-flex justify-content align-items-*">
                        <img src="./downloads/logo-dark.svg" width="50"/>
                            <div className="">
                                <h1>訂閱我們收到最新消息</h1>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6  ">
                        <form>
                        <div className="form-group d-flex   p-5">
                            <label for="emailInput"><h3>電子郵件地址</h3></label>
                            <input type="email" className="form-control" id="emailInput" placeholder="請輸入您的電子郵件地址"/>
                        
                            <button type="submit" className="btn btn-primary">提交</button>

                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </section> */}

        <div className="fixed-bottom mb-4   " type="button">
            <button onclick="topFunction()" id="scrollTopButton" title="返回頂部" className="bg-info ">^</button>
        </div>



            <div className='text-center bg-light p-5 font-size=50 mt-5'>
            <p>
            每個毛孩都是獨一無二的
            「一對一家教」更了解狗狗狀況，貼心打造專屬課程<br />
            提供免費諮詢、付費試上課<br />
            收費方式透明，更安心！
            </p>
            </div>

            <div className="col-sm-6">
               
            </div>
            <div className="col-sm-6">

            </div>
        </div>

        </main>
        <Footer />
        </div>


        );
    }
}
 
export default Main;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
import '../Main/index.css';




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
                <img src={'/images/mainbig.jpeg'} alt='dogPicture' className="img-fluid" />
                    
                        <h1>
                        全心犬意，打造幸福心關係
                        </h1>
                        <p className="p5=p-5" >

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
                            <img src={'/images/dog01.png'} alt='dogPicture' className="img-fluid" />
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
                            <img src={'/images/dog02.png'} alt='dogPicture' className="img-fluid" />
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
                            <img src={'/images/dog03.png'} alt='dogPicture' className="img-fluid" />
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

        <div className="d-flex justify-content-center align-items-center p-5" >
            <h1>
                上課後心得分享!!
            </h1>
        </div>

        <Carousel>
        <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>

            <div className="testimonial text-center">
            <p>在最近的狗狗訓練課程上完後，我對我的狗狗有了很大進步。<br />教練非常專業，用eloquente的語言教導我如何訓練狗狗，並提供了很多寶貴的知識。我已成功地改善了狗狗的行為，讓它在訓練方面有了進步。我推給任何希望訓練狗狗的人去上這項課程。</p>
            <em>- John Doe</em>
            </div>
        </div>
        </Carousel.Item>


        <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>

        <div className="testimonial text-center">
            <p>大張的訓練課程，教練很熱心，讓我的狗狗獲得了良好進步。</p>
            <em>- Jane Doe</em>
          </div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>

        <div className="testimonial text-center">
            <p>訓練課程非常有效，教練提供很多寶貴的知識，讓我的狗狗獲得了最佳進步。</p>
            <em>- Peter Pan</em>
          </div>
          </div>

        </Carousel.Item>




            
       
        </Carousel>

        </main>
        <Footer />
        </div>


        );
    }
}
 
export default Main;
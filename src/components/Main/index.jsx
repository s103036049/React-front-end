import React, { Component } from 'react';
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
            <div class="row bg-white p-0" >
                <section class="text-center bg-light p-5 font-size=50 mt-5" id="關於我們">

                    <div data-aos="fade-up" data-aos-duration="3000">
                        <img src={'/images/mainbig.jpeg'} style={{ height: "500px" }} />
                        
                        <p class="p5=p-5" >
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

            <div class="container d-flex justify-content-center " data-aos="fade-up"
            data-aos-duration="3000" id="新品上市" >
                <div class="row ">
                    <div class="col-md-4 mb-4">
                        <div class="mx-auto" >
                            <div class="container mt-3 d-flex " >
                                <div class="card" >
                                <img src={'/images/dog01.png'}  />
                                <div class="card-body text-center " >
                                    <h4 class="card-title">攻擊、追車、追人</h4>
                                    <p class="card-text">毛孩的情緒陰晴不定，有時會被咬到打洞流血，甚至撕裂傷嗎？或是在外遇到狗狗、車子會很生氣無法控制嗎？</p>
                                    <div class="">
                                    <a href="./商品專區經典巧克力.html" class="btn btn-primary  " >了解更多</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="mx-auto" >
                            <div class="container mt-3 d-flex " >
                                <div class="card" >
                                <img src={'/images/dog01.png'} style={{ height: "200px" }} />
                                <div class="card-body text-center " >
                                    <h4 class="card-title">經典巧克力系列</h4>
                                    <p class="card-text">用舌尖的味蕾來感受甜蜜和幸福，細膩的口感，甜蜜的味道。</p>
                                    <div class="">
                                    <a href="./商品專區經典巧克力.html" class="btn btn-primary  " >了解更多</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="mx-auto" >
                            <div class="container mt-3 d-flex " >
                                <div class="card" >
                                <img src={'/images/dog01.png'} style={{ height: "200px" }} />
                                <div class="card-body text-center " >
                                    <h4 class="card-title">經典巧克力系列</h4>
                                    <p class="card-text">用舌尖的味蕾來感受甜蜜和幸福，細膩的口感，甜蜜的味道。</p>
                                    <div class="">
                                    <a href="./商品專區經典巧克力.html" class="btn btn-primary  " >了解更多</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>  




                </section>

                <section>
                <div class="container-fluid mt-4  bg-info p-3 " data-aos="fade-up"
                data-aos-duration="3000" id="其他好康">
                    <div class="row " >
                        <div class="col-sm-6  text-center justify-content p-5 align-items-*">
                            <div class="d-flex justify-content align-items-*">
                            <img src="./downloads/logo-dark.svg" width="50"/>
                                <div class="">
                                    <h1>訂閱我們收到最新消息</h1>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6  ">
                            <form>
                            <div class="form-group d-flex   p-5">
                                <label for="emailInput"><h3>電子郵件地址</h3></label>
                                <input type="email" class="form-control" id="emailInput" placeholder="請輸入您的電子郵件地址"/>
                            
                                <button type="submit" class="btn btn-primary">提交</button>

                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </section>

            <div class="fixed-bottom mb-4   " type="button">
                <button onclick="topFunction()" id="scrollTopButton" title="返回頂部" class="bg-info ">^</button>
            </div>





                <div class="col-sm-6">

                </div>
                <div class="col-sm-6">

                </div>
            </div>

            </main>
            <Footer />
        </div>


        );
    }
}
 
export default Main;
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
            <section class="text-center bg-light p-5 font-size=50 mt-5" id="關於我們">

            <div >
                <div id='標頭'>
                    <p class="p5=p-5" >
                        <h1>
                        到府一對一家教班
                        </h1>
                        <ul className='p-3 contain d-inline-block '>
                            <li>
                            用愛、同理心，和你一起改善狗狗行為問題<br />
                            </li>
                            <li>
                            用愛、同理心，和你一起改善狗狗行為問題<br />
                            </li>

                            <li>
                            用愛、同理心，和你一起改善狗狗行為問題<br />
                            </li>

                        </ul>
                    </p>

                    <p class="p5=p-5" >
                        <h1>
                        精緻團體班
                        </h1>
                        <ul className='p-3 contain d-inline-block '>
                            <li>
                            幼幼班（6 個月以下）<br />
                            </li>
                            <li>
                            用愛、同理心，和你一起改善狗狗行為問題<br />
                            </li>

                            <li>
                            用愛、同理心，和你一起改善狗狗行為問題<br />
                            </li>

                        </ul>
                    </p>
                </div>

                

            </div>

            </section>



                
            </div>




            <Footer />
            </div>

        );
    }
}
 
export default Product;
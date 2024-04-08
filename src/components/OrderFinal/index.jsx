import React, { Component ,useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';
import PaymentForm from '../CardForm';




function OrderFinal() {
    const [orderList, setOrderList] = useState([]);


    // 使用 useEffect 处理组件挂载后的副作用，从后端获取数据
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8081/orderfinal');
                setOrderList(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // 调用 fetchData 函数
    }, []); // 空数组作为第二个参数，表示仅在组件挂载时调用


    const Message = ({ message }) => (
        <section>
          <p>{message}</p>
        </section>
      );
    
        return (
            <div>
            <Header />
            <div className='text-center P-5'>
                <div className='text-center P-5 m-5'>
                    <h2>
                    預約確認結果

                    </h2>

                </div>

                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
                    <div className="row">
                    {orderList.map((order) => (
                            <div className="col-md-6 mb-6 mx-auto" key={order.id}>
                                <div className="card  bg-info text-center">
                                <h1>{order.name}</h1>

                                    <h1>{order.title}</h1>
                                    <hr />
                                    <div><h2>${order.price}</h2></div>
                                    <div className="card-body">
                                    {new Date(order.date).toLocaleDateString('zh-CN',
                                     { year: 'numeric', month: 'long', day: 'numeric' })}                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>


                </div>



            </div>

            <Footer />
            </div>
        );
    }
 
export default OrderFinal;
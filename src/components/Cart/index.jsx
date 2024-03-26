import React, { Component ,useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';


import SubTotal from '../SubTotal';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../Redux/cartAction';

import Header from '../Header';
import Footer from '../Footer';
import "./Cart.css";

function Cart () {
    const [productList, setProductList] = useState([]);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8081/cart');
                setProductList(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // 调用 fetchData 函数
    }, []); // 空数组作为第二个参数，表示仅在组件挂载时调用



    return (
        <div className="cart-page container">
            <Header />
            <div className="cart-items">
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th colSpan="2">商品詳細</th>
                            <th>價格</th>
                            <th>移除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cart.map(item => {
                            return (
                                <tr key={item.id}>
                                    {/* <td className="image"><img src={require(`../../Images/${item.image}`)} alt="" /></td> */}
                                    <td className="product-details">
                                        <h3>{item.title}</h3>
                                    </td>
                                    <td className="">$ {item.price}</td>
                                  
                                    <td className="action">
                                        <button onClick={() => dispatch(removefromcart(item.id))}>&times;</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="subtotal-wrapper row">
               
                <div className="col-sm-4 subtotal-wrap right">
                    <SubTotal />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
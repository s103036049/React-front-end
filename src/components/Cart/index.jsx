import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { Button } from 'react-bootstrap'; // Import Bootstrap components

import SubTotal from '../SubTotal';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../Redux/cartAction';

import Header from '../Header';
import Footer from '../Footer';
import "./Cart.css";

function Cart() {
    const [productList, setProductList] = useState([]);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    // onClick={() => dispatch(removefromcart(item.id))}
    const handleRemoveToCart = (item) => {
        // 確認刪除對話框
        if (window.confirm('您確定要從購物車中移除此商品嗎？')) {
          dispatch(removefromcart(item.id));
          toast('商品已被移除',{ autoClose: 1500 }); // 設定顯示時間為 1.5 秒
        }
      }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8081/cart');
                setProductList(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call fetchData function
    }, []); // Empty array as the second parameter means it's called only when the component mounts

    return (
        <div className="cart-page container">
            <Header />
            <div className="cart-items">
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th colSpan="">商品詳細</th>
                            <th>價格</th>
                            <th>移除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cart.map(item => (
                            <tr key={item.id}>
                                {/* <td className="image"><img src={require(`../../Images/${item.image}`)} alt="" /></td> */}
                                <td className="product-details">
                                    <h3>{item.title}</h3>
                                </td>
                                <td className="">$ {item.price}</td>
                                <td className="action">
                                    <Button variant="danger"
                                    onClick={() => handleRemoveToCart(item)}>
                                        ×
                                    </Button>
                                </td>
                            </tr>
                        ))}
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

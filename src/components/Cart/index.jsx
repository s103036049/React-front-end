import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import SubTotal from '../SubTotal';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../Redux/cartAction';

import Header from '../Header';
import Footer from '../Footer';



function Cart () {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
        return (
            <div>
            <Header />
            <div className='cart'>
                <div className='cart_item'>
                {cart.cart.map(item =>{
                    return(
                        <div className='cart_product'>
                            <div className='product_info'>
                            <h2>{item.title}</h2>
                            <p>{item.price} </p>
                            <button
                            onClick={()=> dispatch(removefromcart(item.id))}
                            >
                                Remove from Cart</button>
                            </div>
                        </div>
                    )
                })}
                </div>

                <div className='subtotal'>
                    <SubTotal />
                </div>
            </div>

            <Footer />
            </div>
        );
        
    }

 
export default Cart;
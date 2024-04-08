import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getTotal } from '../../Redux/cartReducer';


function SubTotal (){
    const cart = useSelector(state =>state.cart)
        return (
            <div className='subtotal'>
                <div className='subtotal_area'>
                <h3> 總項目:{cart.cart.length} 項 <br />
                總金額:{getTotal(cart.cart)} </h3>
                <Link to="/checkout" className="btn btn-primary">點我下單</Link>
                </div>
            </div>
        );
    }
 
export default SubTotal;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // 引入 js-cookie

import Header from '../Header';
import Footer from '../Footer';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // 在組件掛載時，從 cookie 中獲取購物車項目和總價格
  useEffect(() => {
    // const savedCartItems = Cookies.getJSON('cartItems') || [];
    const savedTotalPrice = parseFloat(Cookies.get('totalPrice')) || 0;
    // setCartItems(savedCartItems);
    setTotalPrice(savedTotalPrice);
  }, []);

  // 在結帳表單提交時，將購買信息發送到後端
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/orders', {
        shippingAddress,
        paymentMethod,
        cartItems,
        totalPrice,
      });

      Cookies.remove('cartItems');
      Cookies.remove('totalPrice');

      setShippingAddress({});
      setPaymentMethod('');
      setCartItems([]);
      setTotalPrice(0);

      // TODO: 導航到訂單確認頁面
    } catch (error) {
      console.error(error);
    }
  };

  // 計算運費
  const calculateDeliveryFee = () => {
    // TODO: 計算運費
  };

  // 計算總價格
  const calculateTotalPrice = () => {
    const deliveryFee = calculateDeliveryFee();
    return totalPrice + deliveryFee;
  };

  // 將總價格存儲到 cookie 中
  useEffect(() => {
    Cookies.set('totalPrice', calculateTotalPrice());
  }, [calculateTotalPrice]);

  return (
    <div>
      <Header />

      <main className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>結帳</h1>

            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  寄送地址
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={shippingAddress.address}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, address: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  城市
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, city: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  國家
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={shippingAddress.country}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      country: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">
                  郵編
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  value={shippingAddress.zipCode}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      zipCode: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  付款方式
                </label>
                <select
                  className="form-select"
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">請選擇...</option>
                  <option value="paypal">PayPal</option>
                  <option value="stripe">Stripe</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="cartItems" className="form-label">
                  購物車項目
                </label>
                <ul className="list-group mb-3">
                  {cartItems.map((item) => (
                    <li
                      key={item._id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {item.name}{' '}
                      <span className="badge bg-primary rounded-pill">
                        {item.qty}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <label htmlFor="totalPrice" className="form-label">
                  總價格
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalPrice"
                  readOnly
                  value={totalPrice}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                結帳
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
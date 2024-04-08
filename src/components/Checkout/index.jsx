import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearCart  } from '../../Redux/cartAction';


import Header from '../Header';
import Footer from '../Footer';
import { getTotal } from '../../Redux/cartReducer';
import PaymentForm from '../CardForm';



const Checkout = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);
  const [startDate, setStartDate] = useState(new Date()); // 初始化日期為當前日期
  
  const [shippingAddress, setShippingAddress] = useState({
    product_id: cart.cart.map(item => item.id),
    title: cart.cart.map(item => item.title),
    price: getTotal(cart.cart),
    address: '',
    name: '',
    sex: '',
    phone: '',
    date: '',
  });

  // 會員驗證
  const[auth,setAuth] = useState(false);
  //會員姓名判斷初始化
  const [name,setName] = useState('');
   //判斷登入初始化狀態
   const [message, setMessage] =useState('');
  //預設axios的認證
  axios.defaults.withCredentials = true; 
  //驗證身分
  useEffect(() =>{
    axios.get('http://localhost:8081')
    .then(res =>{
      if(res.data.Status === 'Success'){
        setAuth(true);
        setName(res.data.name);
      }else{
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
    .then(err =>console.log());
  },[])



  const handleDateChange = (date) => {
    // 當用戶選擇日期時，更新狀態中的日期值
    setStartDate(date);
    // 也可以將日期值存儲到 shippingAddress 中
    setShippingAddress({ ...shippingAddress, date: date });
  };

  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // 在組件掛載時，從 cookie 中獲取購物車項目和總價格
  useEffect(() => {
    // const savedCartItems = Cookies.getJSON('cartItems') || [];
    // const savedTotalPrice = parseFloat(Cookies.get('totalPrice')) || 0;
    // setCartItems(savedCartItems);
    // setTotalPrice(savedTotalPrice);
  }, []);

  // 在結帳表單提交時，將購買信息發送到後端
  const submitHandler = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/checkout/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(shippingAddress)
      });
      const data = await response.json(); // 解析JSON回應
      setResponseMessage(data.message); // 將回應訊息儲存到狀態中

      if(auth){
    // 顯示成功的吐司訊息
    toast.success(data.message);

    dispatch(clearCart()); // 觸發清空購物車的 action

    // 提交成功後，清空表單輸入字段的值
    setShippingAddress({
      address: '',
      name: '',
      sex: '',
      phone: '',
      date: '',
    });

    setTimeout(() => {
      window.location = "/orderfinal";
    }, 2000);

 }else{
  toast.error('請先登入!')
 }

  } catch (error) {
    // 處理錯誤
    console.error('Error:', error);
  }
};

  return (
    <div>
      <Header />

      <main className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>訂單確認</h1>

            <form onSubmit={submitHandler} className="was-validated">
            {/* onSubmit={submitHandler} */}

            <div className="mb-3">
                <label htmlFor="city" className="form-label">
                目前與毛孩住的地址？
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={shippingAddress.address}
                  required
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, address: e.target.value })
                  }
                />

              <div className="invalid-feedback">請填寫此區塊</div>

              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                請問您的姓名是？
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={shippingAddress.name}
                  pattern="[a-zA-Z\u4e00-\u9fa5]+" 
                  title="姓名只能包含中英文字母"
                  placeholder="請輸入姓名"
                  required
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, name: e.target.value })
                  }
                />
                          {/* <div className="valid-feedback">通過</div> */}

                          <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>

              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                請問您的生理性別是？
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sex"
                  value={shippingAddress.sex}
                  required

                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      sex: e.target.value,
                    })
                  }
                />

                <div className="invalid-feedback">請填寫此區塊</div>

              </div>

              <div className="mb-3">
                <label htmlFor="zipCode" className="form-label">
                請問您的聯絡電話？
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={shippingAddress.phone}
                  required
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      phone: e.target.value,
                    })
                  }
                />

                <div className="invalid-feedback">請填寫此區塊</div>

              </div>

              <div className="mb-3">
                請選擇預約日期<br />
                <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          minDate={new Date('2024-04-15')} // 只能選擇今天或未來的日期
          maxDate={new Date('2024-04-30')} // 只能選擇到 2024 年底的日期
          dateFormat="yyyy/MM/dd"
        />              </div>

              <div className="mb-3">
                <label htmlFor="cartItems" className="form-label">
                  <h1>訂單項目</h1>
                </label>
                <ul className="list-group mb-3">
                {cart.cart.map(item => {
                            return (
                                <tr key={item.id} name={item.id}>
                                    {/* <td className="image"><img src={require(`../../Images/${item.image}`)} alt="" /></td> */}
                                    <td className="product-details" name={item.title}>
                                        <h4>{item.title}</h4>
                                        <hr />
                                    </td>
                                </tr>
                            )
                        })}
                
                <div className="mb-3">
                <label htmlFor="totalPrice" className="form-label">
                  總價格
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalPrice"
                  readOnly
                  value={getTotal(cart.cart)}
                />
              </div>

                </ul>
              </div>

              <div>
                {/* 其他購物車內容 */}
                {getTotal(cart.cart) > 0 ? (
                  // 如果購物車總金額大於0，顯示支付表單組件
                  <div className='text-center'>
                  <h1>
                    請先付款!
                  </h1>
                  <PaymentForm />

                </div>

                ) : (
                  // 如果購物車總金額不大於0，則不顯示任何內容
                  // 這裡可以留空或顯示相關訊息
                  <div></div>
                )}
              </div>


              <button 
              type="submit" className="btn btn-primary">
                確認下單
              </button>
            </form>
          </div>
        </div>
      </main>

{/* <div>12377777
{responseMessage && <p>回應訊息: {responseMessage}
</p>}

</div> */}


      <Footer />
    </div>
  );
};

export default Checkout;
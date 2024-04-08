import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartShopping } from "react-icons/fa6";


import axios from 'axios';
import '../Header/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  const cart = useSelector(state => state.cart)

  // 漢堡選單重複使用按鈕初始化狀態
  const [isMenuOpen, setMenuOpen] = useState(false);

  //認證初始化狀態
  const[auth,setAuth] = useState(false);

  //判斷登入初始化狀態
  const [message, setMessage] =useState('');

  //會員姓名判斷初始化
  const [name,setName] = useState('');
  //預設axios的認證
  axios.defaults.withCredentials = true; 

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

  //觸發漢堡選單按鈕
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //登出按鈕
const handleDelete =() =>{
  axios.get('http://localhost:8081/logout')
  .then(res =>{
    toast.success('登出成功!', { autoClose: 1500 }); // 設定顯示時間為 1.5 秒
  // 延遲 1 秒後自動跳轉到首頁
  setTimeout(() => {
    window.location.reload(true);
    window.location = "/"
  }, 2000);

  }).catch(err =>console.log(err));
}

return (
<nav className="navbar navbar-expand-lg navbar-light text-align-center mx-auto sticky-top navbar-blur">
  <div className="container">
    <Link to="/" className="navbar-brand">
      <img src={'/images/LogoMakr.png'} alt="Logo" className="img-fluid img-cropped" />
    </Link>

    {/* 漢堡按鈕觸發圖示 */}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleMenu}
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav mx-auto p-3">
        <li className="nav-item active">
          <Link to="/" className="nav-link">首頁</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">課程介紹</Link>
        </li>

        {/* 驗證用戶是否登入時會顯示不同組件 */}
        {auth ? (
          <>
            <li className="nav-item dropdown bg-info rounded">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                你好-{name}
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                <Link to="/member-center" className="dropdown-item">會員中心</Link>
                <Link to="/checkout" className="dropdown-item">結帳</Link>
                <Link to="/orderfinal" className="dropdown-item">預約確認</Link>
                {/* 其他選項 */}
              </div>
            </li>
            <li className="nav-item">
              <button className='btn btn-danger' onClick={handleDelete}>
                登出
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">會員登入</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">會員註冊</Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <Link to="/cart" className="nav-link" style={{ textDecoration: 'none', color: 'red' }}>
            <FaCartShopping /><strong>{cart.cart.length}</strong>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;

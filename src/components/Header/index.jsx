// App.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  // 漢堡選單重複使用按鈕初始化狀態
  const [isMenuOpen, setMenuOpen] = useState(false);
  //登出按鈕初始化狀態
  const[auth,setAuth] = useState(false);
  //登入按鈕初始化狀態
  const [message, setMessage] =useState('');

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
    .then(err =>console.log(err));
  },[])
  //觸發漢堡選單按鈕
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //登出按鈕
const handleDelete =() =>{
  axios.get('http://localhost:8081/logout')
  .then(res =>{
    alert('登出成功!')
  // 延遲 1 秒後自動跳轉到首頁
  setTimeout(() => {
    window.location.reload(true);
    window.location = "/"
  }, 1000);

  }).catch(err =>console.log(err));
}

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light text-align-center">
  <div className="container">
    <img src={'/images/LogoMakr.png'} alt="Logo" className="navbar-brand" />
    {/* <a className="navbar-brand" href="/">
      Your Logo
    </a> */}

    {/* 漢堡選單按鈕 */}
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
    
    {auth?
    <div className='d-flex'>
      <li className="nav-item">
        <Link to="/member-center" className="nav-link">你好-{name}</Link>
      </li>
      {/* <h3>you are Authorized ---{name}</h3>   */}
      <button className='btn btn-danger ' 
      onClick={handleDelete}
      >
        登出
      </button>
    </div>
    :
    <div className='d-flex'>
  {/* <h3> {message}</h3>   */}
  <li className="nav-item">
    <Link to="/login" className="nav-link">會員登入</Link>
  </li>
        
  <li className="nav-item">
    <Link to="/register" className="nav-link">會員註冊</Link>
  </li>

  {/* <button className='btn btn-primary'>login</button> */}
    </div>
  }
      
      </ul>
    </div>

  </div>
</nav>  
  );
};

export default Header;

// App.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const[auth,setAuth] = useState(false);
  const [message, setMessage] =useState('');
  const [name,setName] = useState('');
  axios.defaults.withCredentials = true; 

  useEffect(() =>{
    axios.get('http://localhost:8081')
    .then(res =>{
      if(res.data.Status === 'Success'){
        setAuth(true);
        setName(res.data.Name);
      }else{
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
    .then(err =>console.log(err));
  },[])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

const handleDelete =() =>{
  axios.get('http://localhost:8081/logout')
  .then(res =>{
    window.location.reload(true);

  }).catch(err =>console.log(err));
}

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light text-align-center">
      <div className="container">
        <img src={'/images/LogoMakr.png'} alt="Logo" className="navbar-brand" />
        {/* <a className="navbar-brand" href="/">
          Your Logo
        </a> */}
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">課程介紹</Link>
            </li>
        
       {auth?
       <div>
      <h3>you are Authorized {name}</h3>  
      <button className='btn btn-danger'
      onClick={handleDelete}
      >logout</button>
       </div>
       :
       <div>
      <h3> {message}</h3>  
      <h3>login now</h3>
      <button className='btn btn-primary'>login</button>
       </div>
      }
          





            {/* <li className="nav-item">
              <Link to="/register" className="nav-link">會員註冊</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">會員登入</Link>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>  );
};

export default Header;

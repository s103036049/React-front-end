import React, { Component,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';


function  Login () {
    const [values, setValues] = useState({
        email: '',
        password: '',
      }) 

axios.defaults.withCredentials=true;
// const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8081/login', values)
  .then(res => {
    if (res.data.Status === "Success") {
        window.location = "/";
    } else if (res.data.hasOwnProperty('Error')) {
        alert(res.data.Error);
    }else {
        alert('Unknown error occurred');
      }
console.log(res.data.Status)

  })
  .catch(error => {
    console.error('login failed:', error);
    alert('login failed');
  })


//   window.confirm('確定登入嗎?')
//   window.location = "/";
  console.log(values);

};


        return (

            <div>
            <Header />

            <div className="container mt-5" id="點擊跳轉4">
                <div className="row justify-content-center">

                <div className="col-md-6">
                    <div className="text-center">
                        <h2 className="mb-4">登入會員</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="was-validated">
                        <div className="mb-3 mt-3 ">
                        <label htmlFor="email" className="form-label">會員帳號:</label>
                        <input type="text" className="form-control " 
                        onChange={e => setValues({...values, email: e.target.value })}

                        id="email" placeholder="請輸入會員帳號" name="email" required/>

                        <div className="valid-feedback">通過</div>
                        <div className="invalid-feedback">請填寫此區塊</div>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">會員密碼:</label>
                        <input type="password" className="form-control" 
                        onChange={e => setValues({...values, password: e.target.value })}
                        id="password" placeholder="請輸入會員密碼" name="password" required/>

                        <div className="valid-feedback">通過</div>
                        <div className="invalid-feedback">請填寫此區塊</div>
                        </div>

                        <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required/>
                        <label className="form-check-label" htmlFor="myCheck">保持登入</label>
                        <div className="valid-feedback">通過</div>
                        <div className="invalid-feedback"></div>
                        </div>
                        <button type="submit" className="btn btn-primary">登入</button>
                        <br /><br /><br />
                        <Link to="/register" className="btn btn-primary">點我註冊</Link>
                    </form>          
                </div>

                </div>
            </div>

            <Footer />

            </div>
        );
    }

 
export default Login;
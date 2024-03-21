import React, { Component,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';


function  Login () {
  // 初始化狀態
    const [values, setValues] = useState({
        email: '',
        password: '',
      }) 

// 不需要在每個 Axios 請求中都手動設置,在一個地方設置它為默認值，以減少重複代碼
axios.defaults.withCredentials=true;

// 在用戶點擊登錄按鈕後被調用
const handleSubmit = (e) => {
  e.preventDefault();//阻止表單的默認提交行為

  // 使用 Axios 發送一個 POST 請求到指定的 URL,將表單的數據 values 作為請求的主體
  axios.post('http://localhost:8081/login', values)
  .then(res => {
    if (res.data.Status === "Success") {
      alert('登入成功!');
  // 延遲 1 秒後自動跳轉到首頁
  setTimeout(() => {
    window.location = "/";
  }, 1000);

    } else if (res.data.hasOwnProperty('Error')) {
        alert(res.data.Error);
    }else {
        alert('Unknown error occurred');
    }
// console.log(res.data.Status)
  })//end of .then
  .catch(error => {
    // console.error('login failed:', error);
    alert('登入失敗');
  })//end of .catch

};//end of 登入按鈕功能

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
            // 用於更新登錄表單中電子郵件地址輸入框的值。
            onChange={e => setValues({...values, email: e.target.value })}

            id="email" placeholder="請輸入會員帳號" name="email" required/>

            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>
            </div>

            <div className="mb-3">
            <label htmlFor="password" className="form-label">會員密碼:</label>
            <input type="password" className="form-control" 
            // 用於更新登錄表單中密碼輸入框的值。
            onChange={e => setValues({...values, password: e.target.value })}
            id="password" placeholder="請輸入會員密碼" name="password" required/>

            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>
            </div>

            {/* <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required/>
            <label className="form-check-label" htmlFor="myCheck">保持登入</label>
            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback"></div>
            </div> */}
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
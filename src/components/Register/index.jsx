import React, { Component ,useState   } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';
const backgroundImage = `${process.env.PUBLIC_URL}/images/mainbig.jpeg`;


 function Register() {
  const [values, setValues] = useState({
    // 初始化狀態
          email: '',
          password: '',
          name: '',
        }) 
  
// 處理表單提交的
const handleSubmit = (e) => {
    e.preventDefault();//阻止表單的默認提交行為

    // 使用 Axios 發送一個 POST 請求到指定的 URL,將表單的數據 values 作為請求的主體
    axios.post('http://localhost:8081/register', values)
    .then(res => {
      if (res.data.Status === "Success") {
        toast.success('註冊成功!', { autoClose: 1500 }); // 設定顯示時間為 1.5 秒
    // 延遲 1 秒後自動跳轉到登入頁
    setTimeout(() => {
      window.location = "/login";
    }, 1000);

      } else if (res.data.hasOwnProperty('Error')) {
          alert(res.data.Error);
      }else {
        console.log(res.data.Status);
      }
  // console.log(res.data.Status);
    })//end of .then()
    .catch(error => {
      console.error('Registration failed:', error);
      toast.warning('註冊失敗!', { autoClose: 2000 });
    })//end of .catch

  };
  


return (

  <div>
  <Header />

  <div className="container mt-5" >
    <div className="row justify-content-center">

      <div className="col-md-6">
        <div className="text-center">
            <h2 className="mb-4">註冊會員</h2>
        </div>
        <form  onSubmit={handleSubmit}  className="was-validated">
          <div className="mb-3 mt-3 ">
            <label htmlFor="email" className="form-label">會員帳號:</label>
            <input type="text" className="form-control" id="email" 
            pattern="^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$" 
            title="至少6個字符，必須包含至少1個字母和1個數字。"  
            placeholder="請輸入會員帳號" name="email" 
              onChange={e => setValues({...values, email: e.target.value })} 
              required/>
            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">會員密碼:</label>
            <input type="password" className="form-control" id="password" 
            pattern="^(?=.*[a-zA-Z])(?=.*\d).{6,}$"
            placeholder="請輸入會員密碼" name="password" 
            title="至少6個字符，必須包含至少1個字母和1個數字。"
            onChange={e => setValues({...values, password: e.target.value })} 
            required/>
            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>
          </div>

          <div className="mb-3 mt-3 ">
            <label htmlFor="name" className="form-label">會員姓名:</label>
            <input type="text" className="form-control " id="name" 
            pattern="[a-zA-Z\u4e00-\u9fa5]+" 
            title="姓名只能包含中英文字母"

            placeholder="請輸入會員姓名" 
            name="name" 
            onChange={e => setValues({...values, name: e.target.value })} 
            required/>
            <div className="valid-feedback">通過</div>
            <div className="invalid-feedback">請填寫此區塊</div>
          </div>
          
          <button type="submit" className="btn btn-primary">註冊</button>
          <br /><br /><br />
          <Link to="/login" className="btn btn-primary">點我登入</Link>
        </form>          
      </div>

    </div>
  </div>

  <Footer />
  </div>
);
  }//end of Register()

 
export default Register;
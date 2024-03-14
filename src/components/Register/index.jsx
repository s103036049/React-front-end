import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';


class Register extends Component {
    state = {  } 
    render() { 
        return (

            <div>
            <Header />

            <div class="container mt-5" id="點擊跳轉4">
        <div class="row justify-content-center">

          <div class="col-md-6">
            <div class="text-center">
                <h2 class="mb-4">註冊會員</h2>
            </div>
            <form action="/action_page.php" class="was-validated">
                <div class="mb-3 mt-3 ">
                  <label for="uname" class="form-label">會員帳號:</label>
                  <input type="text" class="form-control " id="uname" placeholder="請輸入會員帳號" name="uname" required/>
                  <div class="valid-feedback">通過</div>
                  <div class="invalid-feedback">請填寫此區塊</div>
                </div>
                <div class="mb-3">
                  <label for="pwd" class="form-label">會員密碼:</label>
                  <input type="password" class="form-control" id="pwd" placeholder="請輸入會員密碼" name="pswd" required/>
                  <div class="valid-feedback">通過</div>
                  <div class="invalid-feedback">請填寫此區塊</div>
                </div>

                <div class="mb-3">
                  <label for="pwd" class="form-label">會員姓名:</label>
                  <input type="text" class="form-control" id="userName" placeholder="請輸入會員姓名" name="userName" required/>
                  <div class="valid-feedback">通過</div>
                  <div class="invalid-feedback">請填寫此區塊</div>
                </div>


                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required/>
                  <label class="form-check-label" for="myCheck">保持登入</label>
                  <div class="valid-feedback">通過</div>
                  <div class="invalid-feedback"></div>
                </div>
                <button type="submit" class="btn btn-primary">註冊</button>
            </form>          
          </div>


        </div>
    </div>





            <Footer />
            </div>
        );
    }
}
 
export default Register;
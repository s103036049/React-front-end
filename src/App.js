import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './components/Main';
import ProductPages from './components/ProductPages';
import Register from './components/Register';
import Login from './components/Login';
import MemberCenter from './components/MemberCenter'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import OrderFinal from './components/OrderFinal';


class App extends Component {
    render() {
  
      return (
        <BrowserRouter>
          <div>
          <ToastContainer />
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/product" component={ProductPages} />
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login} />
              <Route path="/member-center" component={MemberCenter} /> 
              <Route path="/cart" component={Cart} /> 
              <Route path="/checkout" component={Checkout} /> 
              <Route path="/orderfinal" component={OrderFinal} /> 

            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  } 
  
export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Main from './components/Main';
import ProductPages from './components/ProductPages';
import Register from './components/Register';
import Login from './components/Login';
import MemberCenter from './components/MemberCenter'



class App extends Component {
    render() {
  
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/product" component={ProductPages} />
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login} />
              <Route path="/member-center" component={MemberCenter} /> {/* 会员中心路由 */}
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  } 
  
export default App;
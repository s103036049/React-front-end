//引入react核心庫
import React from 'react';
//引入ReactDOM核心庫
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Redux/cartReducer'
import sessionIdReducer from './Redux/sessionIdReducer'


// 引入bootstrap
import "bootstrap/dist/css/bootstrap.css";
// 引入App
import App from './App'

const store = configureStore({
    reducer:{
        cart:cartReducer,
        sessionId:sessionIdReducer
    }
})


// 使用 createRoot
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
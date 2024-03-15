//引入react核心庫
import React from 'react';
//引入ReactDOM核心庫
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';


// 引入bootstrap
import "bootstrap/dist/css/bootstrap.css";
// 引入App
import App from './App'

// 使用 createRoot
createRoot(document.getElementById('root')).render(<App />);
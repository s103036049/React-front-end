import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';



const MemberCenter = () => {
    axios.defaults.withCredentials = true; 
    const [name,setName] = useState('');
    const[auth,setAuth] = useState(false);


    useEffect(() =>{
        axios.get('http://localhost:8081')
        .then(res =>{
          if(res.data.Status === 'Success'){
            setAuth(true);
            setName(res.data.name);
          }
        })
        .then(err =>console.log());
      },[])
    
        return (
        <div>
        <Header />
            <table className="table table-striped table-hover text-center">
                <thead>
                    <tr>
                        <th>
                            會員名稱
                        </th>
                        <th>
                            會員訂單
                        </th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {name}
                        </td>
                        <td>
                            <input className="check-box" disabled="disabled"
                                type="checkbox" />
                        </td>
                        <td>
                            <span className="float-right">
                                <a href="/Todo/Edit/1" className="btn btn-outline-primary btn-sm">編輯</a> |
                                <a href="/Todo/Delete/1" className="btn btn-outline-danger btn-sm">刪除</a>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>

        <Footer />
        </div>
        );
    }

 
export default MemberCenter;
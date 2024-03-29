import React, { Component ,useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {useDispatch} from 'react-redux'
import { addtocart } from '../../Redux/cartAction';


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';


const Product = () => {
    const [productList, setProductList] = useState([]);

    // 定义 dispatchAction 函数，用于处理购买按钮点击事件
    const dispatch = useDispatch()

    
    // 使用 useEffect 处理组件挂载后的副作用，从后端获取数据
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8081/product');
                setProductList(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // 调用 fetchData 函数
    }, []); // 空数组作为第二个参数，表示仅在组件挂载时调用

    const[auth,setAuth] = useState(false);
    //會員姓名判斷初始化
    const [name,setName] = useState('');
     //判斷登入初始化狀態
     const [message, setMessage] =useState('');
    //預設axios的認證
    axios.defaults.withCredentials = true; 
    //驗證身分
    useEffect(() =>{
      axios.get('http://localhost:8081')
      .then(res =>{
        if(res.data.Status === 'Success'){
          setAuth(true);
          setName(res.data.name);
        }else{
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then(err =>console.log());
    },[])
  
    //定義把產品加入購物車 下面2個都可以成功
    // onClick={()=>dispatch(addtocart({...product}))}
    //const handleAddToCart = (product) => dispatch(addtocart(product))

    const handleAddToCart = (product) => {
      if (auth) {
        dispatch(addtocart(product));
        toast.success('商品已添加到購物車！');
      } else {
        toast.error('請先登入！');
      }
    };
    



    return (
        <div>
            <Header />

            <section className="text-center bg-light p-5 font-size=50 mt-5" id="關於我們">
                <div>
                    <div id='標頭'>
                    <h1>到府一對一家教班</h1>

                        <div className="p5=p-5" >
                            <ul className='p-3 contain d-inline-block '>
                                <li>8 堂行為問題調整</li>
                                <li>6 堂幼犬訓練課</li>
                            </ul>
                        </div>

                        <h1>精緻團體班</h1>

                        <div className="p5=p-5" >
                            <ul className='p-3 contain d-inline-block '>
                                <li>幼幼班（6 個月以下）</li>
                                <li>基礎班（7 個月以上）</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100px' }}>
                <h2>
                    <em>
                    服務流程全透明<br />
                課程常見問題

                    </em>
                </h2>
              
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
                <div className="row">
                    {productList.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card  bg-info text-center">
                                <h1>{product.title}</h1>
                                <div><h2>${product.price}</h2></div>
                                <div className="card-body">
                                    <p className="card-text">{product.content}</p>

                                    <button className="btn btn-primary my-custom-hover" type="button"
                                    
                                    onClick={() => handleAddToCart(product)}>
                                    立刻加入預約

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}; 
export default Product;
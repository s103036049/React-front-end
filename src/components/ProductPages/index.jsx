import React, { Component ,useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useDispatch} from 'react-redux'
import { addtocart } from '../../Redux/cartAction';


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton'



const Product = () => {
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // 定義 dispatchAction 函數，用於處理購買按鈕點擊事件
    const dispatch = useDispatch();

    // 使用 useEffect，從後端獲取產品數據
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:8081/product');
                setProductList(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // 調用 fetchData 函數
    }, []); // 空數組作為第二個參數，表示僅在組件掛載時調用

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
          if (!product.isReserved) {
            dispatch(addtocart(product));
            setCartItems(prevCart => [...prevCart, product]);
            product.isReserved = true; // 更新預約狀態
            toast.success('商品已添加到購物車！', { autoClose: 1500 }); // 設定顯示時間為 1.5 秒
          } else {
            toast.warning('該商品已經預約。', { autoClose: 2000 });
          }
        } else {
          toast.error('請先登入。', { autoClose: 2000 });
        }
      };    

      useEffect(() => {
        AOS.init(); // 初始化 AOS 庫
      }, []); // 空数组表示只在组件掛載時運行一次

    return (
        <div>
            <Header />

            {/* 課程說明區 */}
            <section className="text-center bg-light p-5 font-size=50 mt-5" >
                <div>
                    <div >
                        <div
                        data-aos="fade-right"
                        data-aos-duration="3000"
                        >
                        <h1>到府一對一家教班</h1>
                            <div className="p5=p-5" >
                                <ul className='p-3 contain d-inline-block '>
                                    <li>8 堂行為問題調整</li>
                                    <li>6 堂幼犬訓練課</li>
                                </ul>
                            </div>
                        </div>

                        <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        >
                        <h1>精緻團體班</h1>

                        <div className="p5=p-5" >
                            <ul className='p-3 contain d-inline-block '>
                                <li>幼幼班（6 個月以下）</li>
                                <li>基礎班（7 個月以上）</li>
                            </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 注意事項區 */}
            <div className="d-flex justify-content-center p-5 text-center
            align-items-center bg-light" 
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{ minHeight: '100px' }}>
                <h2>
                    <strong>
                    服務流程全透明<br />
                    期間限定免費提供預約<br />
                    請選擇到府一對一家教班<br /><br />
                    重要提醒!!!<br />
                    以下3種課程<br />
                    屬於期間限定<br />
                    趕快把握時間加入我們吧！

                    </strong>
                </h2>
              
            </div>

            {/* 時間預約說明區 */}
            <div className='contain-fluid text-center m-5'
            data-aos="fade-up"
            data-aos-duration="3000"
            >
                <div className='m-5'><h1>限時免費預約中</h1></div>
                
                <div >
                    <h3>免費到府預約期間:4/15到4/30</h3>
                </div>
                <div>
                    <h3>到府家教班，6 堂幼犬訓練課預約期間:4/20到4/30</h3>
                </div>

                <div>
                    <h3>精緻團體班，團體課程:5/1到5/30</h3>
                </div>

            </div>

             {/* 資料庫卡片說明區 */}
            <div className="d-flex justify-content-center align-items-center" 
            data-aos="fade-up"
            data-aos-duration="3000"
            style={{ minHeight: '100px' }}>
                <div className="row">
                    {productList.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card  bg-info text-center">
                                <h1>{product.title}</h1>
                                <hr />
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
            
            <ScrollToTopButton />

            <Footer />
        </div>
    );
}; 
export default Product;
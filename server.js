// 後端用node.js

import express from 'express';
import mysql from 'mysql';
import { v4 as uuidv4 } from 'uuid'; // 用於生成唯一的訂單編號
import bodyParser from 'body-parser';

// 允許 Web 應用程式訪問來自不同域的資源,實現跨域資源分享
import cors from 'cors';
// 參用jwt用於使用者認證和授權,傳遞使用者資訊
import jwt from 'jsonwebtoken';
// bcrypt是一個加密演算法，用於安全地儲存使用者密碼
import bcrypt from 'bcrypt';
// 用於解析客戶端發送請求中的 cookie,解析後附加到請求物件上
import cookieParser from 'cookie-parser';
// 在 bcrypt 中，salt 的概念用於增加密碼哈希的複雜性
const salt = 10;


const YOUR_DOMAIN = 'http://localhost:3000';

const app = express();

app.use(bodyParser.json());

// 啟動伺服器並讓它在端口 8081 上監聽請求
app.listen(8081, () => {
    console.log('Server is running on port 8081');
})

app.use(express.json());

// 跨域的請求和方法
app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET', 'POST'],
    credentials:true
}));

app.use(cookieParser());

// 使用中間件 驗證使用者的身份
const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){ //沒有找到有效的 token
        return res.json({Error:'you are not allowed to'});
    }else{ //如果找到了 token,驗證 JWT 的有效性
        jwt.verify(token,'jwt-secret-key',(err,decode) =>{
            if(err){//無效的或已過期,則返回一個包含錯誤訊息的 JSON 物件
                return res.json({Error:'token is not ok'});
            }else{//如果 JWT 是有效的,解碼後存儲在 req.decode 屬性中
                req.name = decode.name;
                next();
            }
        })
    }
}

// 收到來自根路徑的 GET 請求時,在使用者通過驗證後，才會執行
app.get('/',verifyUser,(req,res) =>{
    return res.json({Status : "Success",name: req.name})
})

// 創建和引用資料庫
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
})

//產品頁請求
app.get("/product", function (req, res) {
    db.query("select * from product", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})


// @name", { name: name }
//訂單確認頁請求
app.get("/orderfinal", verifyUser, function (req, res, next) {
    const username = req.name; // 取得使用者名稱
    if (!username) {
        // 如果使用者未登入，回傳提示訊息
        res.status(401).send("請先登入");
        return;
    }

    const query = "SELECT * FROM orderList WHERE name = ?"; // 使用問號作為參數占位符
    db.query(query, [username], function (err, rows) {
        if (err) {
            // 處理錯誤
            console.error("Error executing query:", err);
            res.status(500).send("Internal server error");
        } else {
            res.send(JSON.stringify(rows));
        }
    });
});

//購物車頁面請求
app.get("/cart", function (req, res) {
    db.query("select * from cart", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})

// 接收來自客戶端的新增購物車請求,使用 bcrypt 庫進行加密後,將註冊資訊插入到資料庫中
app.post('/cart', (req, res) => {
    // SQL 插入語句，使用問號 (?) 作為佔位符
    const sql = "INSERT INTO cart (user_id, product_id) VALUES (?, ?)";

    // 從請求體中獲取 user_id 和 product_id
    const values = [req.body.userId, req.body.productId];

    // 使用 db.query 執行 SQL 插入操作
    db.query(sql, values, (err, results) => {
        if(err) {
            // 如果有錯誤，返回錯誤信息
            return res.json({Error: 'Inserting data error in server'});
        }
        // 如果插入成功，返回成功狀態
        return res.json({Status: "Success"});
    });
});

// app.get("/product/item/:id", function (req, res) {
//     conn.query("select * from product where id = ?", 
//         [req.params.id],
//         function (err, rows) {
//             res.send( JSON.stringify(rows[0]) );
//         }
//     )
// })










// 接收來自客戶端的註冊請求,使用 bcrypt 庫進行加密後,將註冊資訊插入到資料庫中
app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`email`,`password`,`name`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt,  (err, hash) => {
        if(err) return res.json({Error:'error for hashing password'});
        const values = [req.body.email, hash, req.body.name];

        db.query(sql, [values], (err, results) => {
            if(err) return res.json({Error:'inserting data error in server'});
           return res.json({Status:"Success"});
        })

    })

})
   
// 處理登入 POST 請求,實現使用 JWT 進行身份驗證的功能。
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ?";
    db.query(sql,[req.body.email],(err, data) =>{
        if(err) return res.json({Error:'登入失敗'});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(),data[0].password,(err,response) =>{
                if(err) return res.json({Error:'密碼比對錯誤'});
                if(response){
                    const name =data[0].name;
                    const token = jwt.sign({name},'jwt-secret-key',{expiresIn:'1d'});
                    res.cookie('token',token);

                    return res.json({Status:'Success'});
                }else {
                    return res.json({Error:'密碼不對'});
                }
            })
        }else{
            return res.json({Error:'帳號不存在'})
        }
    })
})

// 處理登出 GET 請求,刪除使用者的 cookie
app.get('/logout',(req, res) =>{
    res.clearCookie('token');
    return res.json({Status:'Success'});
})


// 設定一個POST路由來接收結帳信息
app.post('/checkout/orders', (req, res) => {
    // 回傳一個包含ok的JSON物件
    // return res.json({ message: 'ok' });

   // 從請求體中提取購物車和用戶信息
   console.log(req.body)
   const { product_id, price, title,address,name,sex,phone,date } = req.body;  
   // 生成唯一的訂單編號
   const orderNumber = uuidv4();
 
   // 創建訂單對象
   const order = {
    product_id: req.body.id,
    title: req.body.title,
    price: req.body.price,
    address: req.body.address,
    name: req.body.name,
    sex: req.body.sex,
    phone: req.body.phone,
    date: req.body.date,
     // 其他訂單相關信息，如總金額、支付狀態等
   };

   const sql = "INSERT INTO orderList (`product_id`, `title`, `price`, `address`, `name`, `sex`, `phone`, `date`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
   db.query(sql, [product_id, title, price, address, name, sex, phone, date], (err, data) => {
     if (err) {
       console.error('Error inserting data:', err);
       return res.status(500).json({ Error: 'Inserting data error in server' });
     }
   
     // TODO: 將訂單信息保存到數據庫
     // ...
   
     // 成功插入訂單信息，回應給前端
     return res.json({
       message: '訂單創建成功',
       order: data, // 如果需要返回插入的訂單信息，可以使用 data
     });
   });
   

  });


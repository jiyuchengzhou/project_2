const express=require('express');
//引入路由器
const userRouter=require('./routes/user.js');
const ajaxRouter=require('./routes/ajaxdemo.js');
const proRouter=require('./routes/pro.js');
//引入body-parser中间件模块
const bodyParser=require('body-parser');
let app=express();
app.listen(8080);
//托管静态资源到public目录
app.use( express.static('./HTML') );
app.use( express.static('./ajax') );
app.use( express.static('./pro') );
//应用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );
//应用路由器
// /user/reg
app.use( '/user',userRouter );
app.use( '/ajax',ajaxRouter );
app.use( '/pro',proRouter );
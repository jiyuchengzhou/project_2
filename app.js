const express=require('express');
const bodyParser=require('body-parser');
const regRouter=require('./routes/klw.js');
let app=express();
app.listen(8080);

//托管静态资源到public目录
app.use(express.static('./HTML'));
//应用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/klw',regRouter);

//应用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/klw',regRouter);

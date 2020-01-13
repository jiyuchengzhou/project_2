const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
let router=express.Router();
//添加路由
//1.ajax测试接口 
router.get("/test",function(req,res){
	console.log("我的第一个ajax接口");
	res.send("我的第一个ajax接口");
});
//2.http原生get做登录
router.get("/http_login",(req,res)=>{
	//1.接收参数
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	//2.非空验证
	if(!$uname){
		res.send("-1");
		return;
	}
	if(!$upwd){
		res.send("-2");
		return;
	}
	//查询数据库
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//3.restful的get登录
//http://127.0.0.1:8080/ajax/login/abc&123
router.get("/v1/login/:uname&:upwd",function(req,res){
	//获取参数
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;

	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//4.post登录
router.post("/login_post",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	console.log($uname+"~~~"+$upwd);
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//5.查询所有用户 get不需要参数,原生和restfult一样
router.get("/getlist",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器
module.exports=router;





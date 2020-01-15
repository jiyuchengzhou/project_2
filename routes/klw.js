const express=require("express");
const pool=require("../pool.js");
//引路由器
let router=express.Router();
 //登录
 router.get("/login",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
   let sql=`select uid from klw_user where uname='${uname}' and upwd='${upwd}'`;
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send("1");
     }else{
       res.send("0");
     }
   })
 })
 //注册
 router.get("/res",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var phone=req.query.phone;

   let sql=`insert into klw_user (uname,upwd,phone)  values ('${uname}','${upwd}','${phone}')`;
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.affectedRows>0){
       res.send("1");
     }else{
       res.send("0");
     }
   })
 })
//获取首页商品列表
router.get("/index",(req,res)=>{
   let sql=`select * from klw_index1_product`;
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send(result);
     }else{
       res.send("0");
     }
   })
 })
//详情页商品显示
router.get("/details",(req,res)=>{
  var $id=req.query.lid;
  let sql=`select *from klw_index1_product where pid=${$id}`
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }
  })

})
//加入购物车
router.get("/cart",(req,res)=>{
  var pic=req.query.pic;
  var intr=req.query.intr;
  var price=req.query.price;
   let sql=`insert into klw_cart (pic,intr,price)  values ('${pic}','${intr}','${price}')`;
   pool.query(sql,(err,result)=>{
     if(err)throw err;
     
     if(result.affectedRows>0){
       res.send(result);
     }else{
       res.send("0");
     }
   })
 })

 //购物车显示数据
 router.get("/scart",(req,res)=>{
  let sql=`select *from klw_cart`
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
    }
  })

})

//删除购物车商品
router.get("/del",(req,res)=>{
  var pid=req.query.pid;
  let sql=`delete from klw_cart where pid=${pid} `
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send(result)
    }else{
      res.send("删除失败")
    }
  })

})

//模糊查询
router.get("/mh",(req,res)=>{
  var key=req.query.key;
  let sql=`select * from klw_index1_product where intr like '%${key}%' `
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    // if(result.length>0){
      res.send(result)
    // }
  })

})

//分页查询
router.get("/fy",(req,res)=>{
  var pageSize=req.query.pageSize
  var begin=req.query.begin
  let sql=`SELECT * FROM klw_second LIMIT ${begin},${pageSize}`;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})

//获取次页商品列表
router.get("/second",(req,res)=>{
  let sql=`select * from klw_second`;
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    
    if(result.length>0){
      res.send(result);
    }else{
      res.send("0");
    }
  })
})

//详情页商品显示
router.get("/fydetail",(req,res)=>{
  var $id=req.query.lid;
  let sql=`select *from klw_second where pid=${$id}`
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result)
      console.log(12345)
    }
  })

})



//导出路由
module.exports=router;
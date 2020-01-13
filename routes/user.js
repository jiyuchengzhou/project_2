const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
let router=express.Router();
//添加路由
//1.注册路由(post /reg)
router.post('/reg',function(req,res){
  //1.1获取post请求的数据
  let obj=req.body;
  //1.2验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止继续往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.phone){
    res.send({code:403,msg:'phone required'});
	return;
  }
//  if(!obj.email){
//    res.send({code:404,msg:'email required'});
//	return;
//  }
  //1.3执行SQL命令
  pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
    if(err) throw err;
	console.log(result);
  });
  res.send('注册成功');
});
//2.登录路由(post /login)
router.post('/login',function(req,res){
  //2.1获取post请求的数据
  let obj=req.body;
  //console.log(obj);
  //2.2验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //2.3执行SQL命令
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
    if(err) throw err;
	console.log(result);
	//结果是数组，如果数组长度大于0，找到匹配数据，登录成功；否则长度是0，登录失败
	if(result.length>0){
	  res.send({code:200,msg:'login suc'});
	}else{
	  res.send({code:301,msg:'login err'});
	}
  });
});
//3.检索用户(get  /detail)
router.get('/detail',function(req,res){
  //3.1获取get请求的数据（查询字符串）
  let obj=req.query;
  //console.log(obj);
  //3.2验证数据是否为空
  if(!obj.uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  //3.3执行SQL命令 
  pool.query('SELECT * FROM xz_user WHERE uid=?',[obj.uid],function(err,result){
    if(err) throw err;
	console.log(result);
	//判断是否查找到了用户，根据数组长度
	if(result.length>0){
	  res.send({code:200,data:result[0]});
	}else{
	  res.send({code:301,msg:'can not found'});
	}
  });
});
//4.修改用户(post /update)
router.post('/update',function(req,res){
  //4.1获取post请求的数据
  let obj=req.body;
  //console.log(obj);
  //4.2验证数据是否为空
  //遍历对象，访问每个属性
  let i=400;//记录状态码
  for(let key in obj){
	i++;//每遍历一个属性，值自动加1
	//key 属性名  obj[key]  属性值 
    //console.log(key,obj[key]);
    //如果属性值为空，提示该属性名必须提供
	if(!obj[key]){
	  res.send({code:i,msg:key+' required'});
	  return;
	}
  }
  //4.3执行SQL命令
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],function(err,result){
    if(err) throw err;
	console.log(result);
	//如果响应对象的affectedRows属性的值大于0，说明修改成功，否则修改失败
	if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
});
//5.用户列表(get  /list)
router.get('/list',function(req,res){
  //5.1获取get请求的数据
  let obj=req.query;
  //console.log(obj);
  //5.2判断是否为空，如果为空设置默认值
  if(!obj.pno){
    obj.pno=1;
  }
  if(!obj.count){
    obj.count=2;
  }
  //console.log(obj);
  //5.3计算start
  let start=(obj.pno-1)*obj.count;
  //5.4每页数据量转为数值型
  obj.count=parseInt(obj.count);
  //5.5执行SQL命令
  pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,obj.count],function(err,result){
    if(err) throw err;
	//console.log(result);
	//把查询到数组响应给浏览器
	res.send(result);
  });
});
//导出路由器
module.exports=router;





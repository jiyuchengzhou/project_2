#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS klw;
#创建数据库，设置存储的编码
CREATE DATABASE klw CHARSET=UTF8;
#进入创建的数据库
USE klw;
#创建保存用户信息的表
CREATE TABLE klw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20),
  upwd VARCHAR(32),
  phone VARCHAR(11)
);
#插入数据
INSERT INTO klw_user VALUES(1,'dingding',"123456","15775965901");
INSERT INTO klw_user VALUES(2,'dangdang',"123456","15775965901");
INSERT INTO klw_user VALUES(3,'zhongtao',"123456","15775965901");
#创建保存首页数据的表
CREATE TABLE klw_index1_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  intr VARCHAR(64),
  price DECIMAL(7,2),  #99999.99
  pic VARCHAR(100),
  pic1 VARCHAR(100),
  pic2 VARCHAR(100),
  pic3 VARCHAR(100),
  pic4 VARCHAR(100),
  price_y DECIMAL(7,2),
  store_num INT,
  sale_num INT,
  appraise INT

);
#插入数据
INSERT INTO klw_index1_product VALUES(1,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_index1_product VALUES(2,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(3,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(4,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_index1_product VALUES(5,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_index1_product VALUES(6,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_index1_product VALUES(7,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(8,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(9,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_index1_product VALUES(10,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_index1_product VALUES(11,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_index1_product VALUES(12,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(13,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_index1_product VALUES(14,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_index1_product VALUES(15,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
#创建保存购物车数据的表
CREATE TABLE klw_cart(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  intr VARCHAR(64),
  price DECIMAL(7,2),  #99999.99
  pic VARCHAR(100)
);
#插入数据
INSERT INTO klw_cart VALUES(1,'ThinkPadE470',3999,"./image/details/5de0cd8292dad.jpg");
INSERT INTO klw_cart VALUES(2,'灵越1500',1959,"./image/details/5de0cd8292dad.jpg");
INSERT INTO klw_cart VALUES(3,'小米Air',15645,"./image/details/5de0cd8292dad.jpg");


CREATE TABLE klw_second(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  intr VARCHAR(64),
  price DECIMAL(7,2),  #99999.99
  pic VARCHAR(100),
  pic1 VARCHAR(100),
  pic2 VARCHAR(100),
  pic3 VARCHAR(100),
  pic4 VARCHAR(100),
  price_y DECIMAL(7,2),
  store_num INT,
  sale_num INT,
  appraise INT

);
#插入数据
INSERT INTO klw_second VALUES(1,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(2,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(3,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(4,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(5,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_second VALUES(6,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_second VALUES(7,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(8,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(9,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(10,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(11,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(12,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(13,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(14,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(15,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_second VALUES(16,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(17,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(18,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(19,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(20,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_second VALUES(default,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
INSERT INTO klw_second VALUES(default,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(default,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(default,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(default,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(default,'APP高档金丝雀彩色复印纸80G 彩色复印纸A4 25/100pcs 500页/本 蓝/黄/粉/绿',12.50,"./image/details/index2/01.jpg","./image/details/index2/02.jpg","./image/details/index2/03.jpg","./image/details/index2/04.jpg","./image/details/index2/05.jpg",14.5,1000,502,0);
INSERT INTO klw_second VALUES(default,'施乐易印70gA4 8包/箱',167,"./image/details/5de0cd8292dad.jpg","./image/details/5de0cd829c1aa.jpg","./image/details/5de0cd8293d42.jpg","./image/details/5de0cd8294a93.jpg","./image/details/5de0d0357eb1d.jpg",175,1000,501,0);
INSERT INTO klw_second VALUES(default,'DoubleA复印纸A3 70g/80g (500张) 5包/箱',330,"./image/details/index3/01.jpg","./image/details/index3/02.jpg","./image/details/index3/03.jpg","./image/details/index3/04.jpg","./image/details/index3/05.jpg",290.5,1000,502,0);
INSERT INTO klw_second VALUES(default,'快力文A4不干胶哑面（100张/包）',18.00,"./image/details/index5/01.jpg","./image/details/index5/02.jpg","./image/details/index5/03.jpg","./image/details/index5/04.jpg","./image/details/index5/05.jpg",16.72,1000,502,0);
INSERT INTO klw_second VALUES(default,'得力7682螺旋装订笔记本A5 (50页）',3.00,"./image/details/index4/01.jpg","./image/details/index4/02.jpg","./image/details/index4/03.jpg","./image/details/index4/04.jpg","./image/details/index4/05.jpg",2.85,1000,502,0);
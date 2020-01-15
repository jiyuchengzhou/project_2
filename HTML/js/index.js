$(function(){
			
				var swiper = new Swiper('.swiper-container', {
					// 轮播图
			//    可以参考  180嵌套 、190抓手光标 、 200无限循环 、 2403D滚动切换 、 310缩略图/无限循环
			//    缩放400 、  虚拟410  、自定义插件420
					loop:true,
					spaceBetween: 30,       //slide之间的距离
					centeredSlides: true,   //若为真，那么活动块会居中，而非默认状态下的居左
					effect: 'slide',         //翻转效果
					autoplay: {             //自动切换
						delay: 2500,
						disableOnInteraction: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				}); 

	//商品列表
	var list_product=document.getElementById("repeat_product")
	// var product=[
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥465.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥34.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥1456.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥16547.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥465.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥34.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥1456.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥16547.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥465.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥34.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥1456.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥16547.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥465.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥34.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥167.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥1456.00",intr:"施乐易印70gA4 8包/箱"},
	// 	{pic:"image/souye/5de0d0357eb1d.jpg", price:"¥16547.00",intr:"施乐易印70gA4 8包/箱"},
	// ]
	$.ajax({
		url:'http://127.0.0.1:8080/klw/index',
		type:'get',
		dataType:'json',
		success:function(result){
		var product=result;
		console.log(product)
		

	// list_product.innerHTML=`<div class="list_product">
	// 				<div class="w-100 h-100 ">
	// 					<a class="text-d-none" href="">
	// 						<img class="wh-220" src=${product[0].pic} alt=""><br>
	// 						<span class="">${product[0].intr}</span>
	// 						<span class="d-block index-price ">${product[0].price}</span>
	// 					</a>
	// 				</div>
	// 			</div>`
	// 重复生成商品列表
	for(var key in product){
		var div_list=document.createElement("div");
		//为创建的div添加属性
		div_list.classList.add("list_product");
		div_list.innerHTML=`<div class="w-100 h-100 ">
							<a class="text-d-none" href="details.html?lid=${product[key].pid}">
								<img class="wh-220" src=${product[key].pic} alt=""><br>
								<span class="">${product[key].intr}</span>
								<span class="d-block index-price ">￥${product[key].price}</span>
							</a>
						</div>`
		list_product.appendChild(div_list)
	}
	}
	})
	//滚动条回到顶部设置
	let HTML=document.documentElement;
	let LINK=document.getElementById("link");
	function check(){
		//winH:一屏幕高度  scrollT:卷去的高度
		let winH=HTML.clientHeight;
		let scrollT=HTML.scrollTop;
		LINK.style.display=scrollT>=winH*0.5?'block':'none';
	}
	window.onscroll=check;
	//点击回到顶部
	// var  isscroll=true;
	LINK.onclick=function(){
		// if(isscroll){
			var timer=setInterval(()=>{
				HTML.scrollTop=HTML.scrollTop-100
				if(HTML.scrollTop<=100){
					HTML.scrollTop=0;
					clearInterval(timer);
				}	
			},100)
		
		// 	return isscroll=false;
		// }else{
		// 	clearInterval(timer);
		// 	return isscroll=true;
		// }
	}

})

$(function(){
    //获得?及其之后的查询字符串
    var search=location.search;
    if(search!==""){
    //"?lid=5"
    //将查询字符串按=切割后取第二部分
    var lid=search.split("=")[1];
    }
    
    
    $.ajax({
        url:"http://127.0.0.1:8080/klw/fydetail",
        data:{lid:lid},
        type:"get",
        dataType:"json",
        success:function(result){
            var details=result;
            console.log(lid)
            console.log(1)
            // 放大镜html区
            var photo_content=`   <!-- 左侧 -->
                        <div class="left_show  f-left">
                            <!-- 中图区 -->
                            <div class="md_400 f-left">
                                <img class="md_400 md_pic f-left " src="./image/details/5de0cd8292dad.jpg" alt="">
                                <div class="hidden_md md_400"></div>
                                <div class="mark f-left"></div>
                            </div>
                            
                            <!-- 下排小图片展示区 -->
                            <div class="sm_square">	
                                <div class="arrow f-left"  ><img src="./image/details/left.png" alt=""></div>
                                <img class="sm_img_wh sm_img_border first_sm" src="${details[0].pic}"  alt="">
                                <img class="sm_img_wh" src="${details[0].pic1}"  alt="">
                                <img class="sm_img_wh" src="${details[0].pic2}" alt="">
                                <img class="sm_img_wh" src="${details[0].pic3}" alt="">
                                <img class="sm_img_wh last_sm" src="${details[0].pic4}" alt="">
                                <div class="arrow f-left"><img src="./image/details/right.png" alt=""></div>
                            </div>
                        </div>
                            <!-- 大图区 -->
                            <div class="md_400 o_hidden f-left ">
                                <img class="bg_800 bg_pic" src="./image/details/5de0cd8292dad.jpg" alt="">
                            </div>`
                        
            var all_img=document.querySelector("#all_img");
            all_img.innerHTML=photo_content



            // 放大镜
            var md_pic=document.querySelector(".md_pic");
            var hidden_md=document.querySelector(".hidden_md");
            var bg_pic=document.querySelector(".bg_pic");
            var mark=document.querySelector(".mark");
            var bg_hidden=document.querySelector(".o_hidden");
            var sm_img=document.querySelectorAll(".sm_img_wh");
            var sm_arrow=document.querySelectorAll(".arrow");
            var sm_square=document.querySelector(".sm_square");
            var first_sm=document.querySelector(".first_sm");
            var last_sm=document.querySelector(".last_sm");
            var sm_img_border=document.querySelector(".sm_img_border");
            hidden_md.onmouseover=function(){
                mark.style.display="block";
                bg_hidden.style.display="block";
            }
            hidden_md.onmousemove=function(e){
                e=e || window.event;
                var md_left=e.offsetX;
                var md_top=e.offsetY;
                // bg_hidden.style.display="block";
                // console.log(md_left,md_top);
                bg_pic.style.top="-"+((md_top-105)*2)+"px";
                bg_pic.style.left="-"+((md_left-105)*2)+"px";
                // mark.style.display="block";
                mark.style.left=md_left-105+"px";
                mark.style.top=md_top-525+"px";
                if(md_left<110){
                    mark.style.left="0px";
                    bg_pic.style.left="0px"
                }else if(md_left>315){
                    mark.style.left="210px";
                    bg_pic.style.left="-420px"
                }
                if(md_top<110){
                    mark.style.top="-420px";
                    bg_pic.style.top="0px"
                }else if(md_top>315){
                    mark.style.top="-210px";
                    bg_pic.style.top="-420px"
                }
                // mark.style.left=md_left>100?md_left-100+"px":"0px";
                // mark.style.top=md_top>100?md_top-500+"px":"-400px";
                // console.log(bg_pic.style.top,bg_pic.style.left)
                
            }

            // 大图 中图切换
            md_pic.src=sm_img_border.src
            bg_pic.src=sm_img_border.src

            hidden_md.onmouseleave=function(){
                mark.style.display="none";
                bg_hidden.style.display="none";
            }

            // 放大镜切换图片
            //模拟数据

            for(var i=0;i<sm_img.length;i++){
                sm_img[i].onmouseenter=function(){
                    for(var a=0;a<sm_img.length;a++){
                        sm_img[a].classList.remove("sm_img_border")
                    }
                    // this.nextElementSibling.classList.remove("sm_img_border")
                    this.classList.add("sm_img_border");
                    var sm_img_border=document.querySelector(".sm_img_border");
                    md_pic.src=sm_img_border.src
                    bg_pic.src=sm_img_border.src
                }
            }
            //图片选中样式改变

            sm_arrow[0].onclick=function(){
                var pitch=document.querySelector(".sm_img_border")
                if(first_sm==pitch){
                    return;
                }else{
                    pitch.classList.remove("sm_img_border")
                    pitch.previousElementSibling.classList.add("sm_img_border");
                    sm_square.firstElementChild.classList.remove("sm_img_border")
                    var sm_img_border=document.querySelector(".sm_img_border");
                    md_pic.src=sm_img_border.src
                    bg_pic.src=sm_img_border.src
                }
            }
            sm_arrow[1].onclick=function(){
                var pitch=document.querySelector(".sm_img_border")
                if(last_sm==pitch){
                    return;
                }else{
                    pitch.classList.remove("sm_img_border")
                    pitch.nextElementSibling.classList.add("sm_img_border");
                    sm_square.lastElementChild.classList.remove("sm_img_border")
                    var sm_img_border=document.querySelector(".sm_img_border");
                    md_pic.src=sm_img_border.src
                    bg_pic.src=sm_img_border.src
                } 
            }

            //右侧内容数据插入
            var right_content=`<h4>${details[0].intr}</h4>
            <div class="price_two " style="overflow:hidden">
            <div class="clear-fix mt-20">
            <span class="f-left ml-20">价格</span>
            <span class="f-left  price_f">${details[0].price}</span>
            <div class="fl-r">累计评价</div><br>
            <div class="fl-r " style="margin-right:30px;color:rgb(241, 157, 139)">${details[0].appraise}</div>
            </div>
            
            <div >
            <div class="f-left ml-20">原价</div>
            <div class="f-left price_s"><s>￥${details[0].price_y} </s></div>
            </div>
            </div>
            <div class="w-100 mt-20 peoduct_sale_three">
            <div>库存<span style="color:rgb(241, 157, 139)">${details[0].store_num}</span></div>
            |
            <div>销量<span style="color:rgb(241, 157, 139)">${details[0].sale_num}</span></div>
            |
            <div>包邮</div>
            </div>
            <div class="mt-20">
            <span class="ml-20">数量</span>
            <input type="text" value="1" style="margin-left:100px; width:50px; height:25px;text-align:center">
            <span>箱</span>
            <a class="online_service" href="" >在线客服</a>
            </div>
            <div style="text-align:center; margin-top:40px;">
            <button class="button_buy" >立即购买</button>
            <button class="button_cart" >加入购物车</button>
            </div>
            <div style="font-size:20px;background:red;margin:0 auto;text-align:center;" id="cart_msg"></div>
            `
            $(".details_right").html(right_content)
            
            //加入购物车
            $(".button_cart").click(function(){
                var intr=details[0].intr
                var price=details[0].price
                var pic=details[0].pic
                console.log(price)
                $.ajax({
                    url:'http://127.0.0.1:8080/klw/cart',
                    data:{intr,price,pic},
                    type:'get',
                    dataType:'json',
                    success:function(result){
                        // if(result==1){
                            console.log(result)
                            $("#cart_msg").html("购物车加入成功")
                            //计时器
                            setTimeout(function(){
                                $("#cart_msg").html("")
                            },1000)
                        
                        // }
                    }
                })
            })
          
            
        }
    })
    


    $("#f_logo").click(function(){
        window.location.href="http://127.0.0.1:8080/index.html";
    })
    $("#mh_select").click(function(){
        window.location.href="http://127.0.0.1:8080/mh_select.html";
    })
})
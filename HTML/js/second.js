$(function(){
    var pageSize=10
    //分页所用函数
    function fy(begin,pageSize){
        var list_product=document.getElementById("repeat_product")
        
        $.ajax({
        url:"http://127.0.0.1:8080/klw/fy",
        data:{begin,pageSize},
        type:"get",
        dataType:"json",
        success:function(result){
            var product=result
            list_product.innerHTML=""
            for(var key in product){
                var div_list=document.createElement("div");
                //为创建的div添加属性
                div_list.classList.add("list_product");
                div_list.innerHTML=`<div class="w-100 h-100 ">
                                    <a class="text-d-none" href="fydetails.html?lid=${product[key].pid}">
                                        <img class="wh-220" src=${product[key].pic} alt=""><br>
                                        <span class="">${product[key].intr}</span>
                                        <span class="d-block index-price ">￥${product[key].price}</span>
                                    </a>
                                </div>`
                list_product.appendChild(div_list)
            
            }
        }
    })}


    $.ajax({
		url:'http://127.0.0.1:8080/klw/second',
		type:'get',
		dataType:'json',
		success:function(result){
            var num=result.length;
            // var pageSize=5;
            if(num/pageSize > parseInt(num/pageSize)){   
                totalPage=parseInt(num/pageSize)+1;   
           }else{   
               totalPage=parseInt(num/pageSize);   
           } 
        //    循环生成分页按钮  
           for(var i=0;i<totalPage;i++){
               var total_li=`<li class="bj">${totalPage-i}</li>`
                $("#pre").after(total_li)
           }
           var begin=0;
            var list_product=document.getElementById("repeat_product")
            $.ajax({
                url:"http://127.0.0.1:8080/klw/fy",
                data:{begin,pageSize},
                type:"get",
                dataType:"json",
                success:function(result){
                    var product=result
                    for(var key in product){
                        $(".bj")[0].classList.add("bg_li_selected")
                        var div_list=document.createElement("div");
                        //为创建的div添加属性
                        div_list.classList.add("list_product");
                        div_list.innerHTML=`<div class="w-100 h-100 ">
                                            <a class="text-d-none" href="fydetails.html?lid=${product[key].pid}">
                                                <img class="wh-220" src=${product[key].pic} alt=""><br>
                                                <span class="">${product[key].intr}</span>
                                                <span class="d-block index-price ">￥${product[key].price}</span>
                                            </a>
                                        </div>`
                        list_product.appendChild(div_list)
                    
                    }
                }
                
            }) 
            
            // console.log(xz)
            // 上一页
            $("#pre").click(function(){
                var xz=document.getElementsByClassName("bg_li_selected")
                if($(".bg_li_selected")[0]==$(".bj:first")[0]){
                    return
                }
                $(".bg_li_selected").prev().addClass("bg_li_selected")
                $(".bg_li_selected").next().removeClass("bg_li_selected")
                //刷新分页商品
                // var pageSize=5
                var begin=($(".bg_li_selected")[0].innerHTML*1-1)*pageSize;
                fy(begin,pageSize)
            })
            console.log($(".bj:last"))
             // 下一页
             $("#next").click(function(){
                var xz=document.getElementsByClassName("bg_li_selected")
                if($(".bg_li_selected")[0]==$(".bj:last")[0]){
                    return
                }
                $(".bg_li_selected").next().addClass("bg_li_selected")
                $(".bg_li_selected").prev().removeClass("bg_li_selected")
                //刷新分页商品
                // var pageSize=5
                var begin=($(".bg_li_selected")[0].innerHTML*1-1)*pageSize;
                fy(begin,pageSize)
            })
      
                 
            //循环添加点击事件
            for(var i=0;i<totalPage;i++){
                // 点击触发翻页
                var fyt=document.querySelectorAll(".bj")
                fyt[i].onclick=function(){
                    // 改变分页框样式
                    for(var i=0;i<totalPage;i++){
                        $(".bj")[i].classList.remove("bg_li_selected")
                    }
                    this.classList.add("bg_li_selected")
                    // var pageSize=5;
                    var begin=(this.innerHTML*1-1)*pageSize;
                    // console.log(begin)
                    fy(begin,pageSize)
                }
            }

        }
    })
})
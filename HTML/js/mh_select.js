$(function(){
    //跳转首页
    $("#f_logo").click(function(){
        window.location.href="http://127.0.0.1:8080/index.html";
    })
    
    var list_product=document.getElementById("repeat_product")
    //节流设置
    function jieliu(){
        var valid = true
         function hd() {
            if(!valid){
                //休息时间 暂不接客
                return false 
                
            }
            // 工作时间，执行函数并且在间隔期内把状态位设为无效
                valid = false
        setTimeout(() => {
        var key1=$("#mh_select").val()
        //去掉前后空格
        var key=key1.replace(/(^\s*)|(\s*$)/g, "")
        if(key==""){
            list_product.innerHTML=`<div style="margin:0 auto;font-size:30px;color:red;">未输入搜索内容</div>`
            return
        }
        // console.log(1)
        $.ajax({
            url:"http://127.0.0.1:8080/klw/mh",
            data:{key},
            type:"get",
            dataType:"json",
            success:function(result){
            //如果没有查找到
            if(result.length==0){
                list_product.innerHTML=`<div style="margin:0 auto;font-size:30px;color:red;">未搜索到结果</div>`
                return
            }
            var product=result
            



            
            //重复生成商品列表
            list_product.innerHTML=""
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
    valid = true;
    }, 500)
    }
    return(hd)  
    }
    var jl=jieliu()
    $("#mh_click").click(function(){   
        jl()
    }
    )
   
// 防抖设置
    let timeout = null; // 创建一个标记用来存放定时器的返回值
$("#mh_select").bind("input propertychange",function() {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        var list_product=document.getElementById("repeat_product")
        var key1=$("#mh_select").val()
        //去掉前后空格
        var key=key1.replace(/(^\s*)|(\s*$)/g, "")
        // console.log(key)
        if(key==""){
            list_product.innerHTML=`<div style="margin:0 auto;font-size:30px;color:red;">未输入搜索内容</div>`
            return
        }
        $.ajax({
            url:"http://127.0.0.1:8080/klw/mh",
            data:{key},
            type:"get",
            dataType:"json",
            success:function(result){
            //如果没有查找到
            if(result.length==0){
                list_product.innerHTML=`<div style="margin:0 auto;font-size:30px;color:red;">未搜索到结果</div>`
                return
            }
            // console.log(result.length)
            var product=result
            



           
            //重复生成商品列表
            list_product.innerHTML=""
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
        }})
    }, 2000);
});





})









            
         
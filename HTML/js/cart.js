$(function(){
    //跳转首页
    $("#f_logo").click(function(){
        window.location.href="http://127.0.0.1:8080/index.html";
    })
    // var product=[
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"16443.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"61567.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"154327.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"15432.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    //     {pic:"./image/details/5de0cd8292dad.jpg",intr:"施乐易印70gA4 8包/箱",price:"137.00"},
    // ]
    
//从数据库获取数据      
$.ajax({
    url:'http://127.0.0.1:8080/klw/scart',
    type:'get',
    dataType:'json',
    success:function(result){
        console.log(result)
        var product=result;


    // 计算购买商品总价
    var fun=function(){
        var sum=0;
        var _checked=document.querySelectorAll(":checked")
        for(var i=0;i<_checked.length;i++){
            if(_checked[i]==document.querySelector("#all_select")){
                sum=sum
            }else if(_checked[i]==document.querySelector("#last_all_select")){
                sum=sum
            }else{
                sum+=1*_checked[i].parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML.substring(1)
            }
        
            
        }
        var _sum_total=document.querySelector("#_sum_total")
        _sum_total.innerHTML=sum.toFixed(2)
    }


    $(product).each(function(i,elem){
        
        var cart=`<div class="d-flex w-100 cart_p_height cart_white_bg">
        <div class="w-200"> <input class="_select" style="position:relative;top:-40px;" type="checkbox"> <img style="width:80px;height:80px;margin-left:40px" src=${elem.pic} alt=""> </div>
        <div class="w-230">${elem.intr}</div>
        <div class="w-210">￥${elem.price}</div>
        <div class="w-210"> <button class="_sub">-</button> <input class="num" style="width:40px;height:30px;text-align:center;" value="1" type="text"> <button class="_add">+</button> </div>
        <div class="w-210 _total color-red"></div>
        <div class=""> <span class="_delete">删除</span>  </div>
        </div>`
        console.log(elem.price)
        //放入HTML中
        $("#cart_pro").append(cart)
        // 单个商品总价
        var total=elem.price*($("._sub")[i].nextElementSibling.value)
        $("._total")[i].innerHTML=`￥${total.toFixed(2)}`

        // 加减数量与单个商品总价加载
        $("._add")[i].onclick=function(){
            $("._sub")[i].nextElementSibling.value=1+1*$("._sub")[i].nextElementSibling.value
            var total=elem.price*($("._sub")[i].nextElementSibling.value)
            $("._total")[i].innerHTML=`￥${total.toFixed(2)}`
            // 加载所有选中商品总价格
            fun();
        }
        $("._sub")[i].onclick=()=>{
            if($("._sub")[i].nextElementSibling.value>1){
                $("._sub")[i].nextElementSibling.value-=1
                var total=elem.price*($("._sub")[i].nextElementSibling.value)
                $("._total")[i].innerHTML=`￥${total.toFixed(2)}`
                // 加载所有选中商品总价格
                fun();
            }
        }

             //选中删除
             $("#del_l").click(function(){
                 var del_all=document.querySelectorAll("#cart_pro :checked")
                 var anniu=document.querySelectorAll("._select")
                //  console.log(del_all.length) 
                 for(var a=0;a<del_all.length;a++){
                if(del_all[a]==anniu[i]){
                    console.log(a+"+"+i)
                $.ajax({
                    url:'http://127.0.0.1:8080/klw/del',
                    type:'get',
                    data:{pid:product[i].pid},
                    dataType:'json',
                    success:function(result){
                        console.log(a)
                        // location.reload([true])
                    }})}} 
                location.reload([true]) 
            }            
            )    


        //删除购物车元素
        $("._delete")[i].onclick=function(){
            console.log(elem.pid)
            $.ajax({
                url:'http://127.0.0.1:8080/klw/del',
                type:'get',
                data:{pid:elem.pid},
                dataType:'json',
                success:function(result){
                    location.reload([true])          
                }
              })
        }
    })

        
        
        $(":checkbox").change(function(){
            // 加载所有选中商品总价格
            fun();
            if(this.checked==true){
                console.log(1)
                // 打印单价
                console.log($(":checked").parent().next().next().next().children("input")[0].value)
                // 打印单个总价
                console.log($(":checked").parent().next().next().next().next().html().substring(1))
           }
           
        })
        
  
    var product_num=0;
    var selected_price=0;
    // 全选按钮设置
    $("#all_select").click(function () {
	    if (this.checked) {
            $("#cart_pro :checkbox").prop("checked", true);
            $("#last_all_select ").prop("checked", true);
	    } else {
            $("#cart_pro :checkbox").prop("checked", false);
            $("#last_all_select ").prop("checked", false);
        }
        // 单个商品总价格
        product_num=$("#cart_pro :checked").length;
        $("#_pro_num").html(product_num)
         // 加载所有选中商品总价格
        //  fun();
    });
    // 单个按钮设置
    $("#cart_pro :checkbox").click(function(){
        if($("#cart_pro :checked").length==product.length){
            $("#all_select").prop("checked", true);
            $("#last_all_select").prop("checked", true);
        }else{
            $("#all_select").prop("checked", false);
            $("#last_all_select").prop("checked", false);
        }
        // 单个商品总价格
        product_num=$("#cart_pro :checked").length;
        $("#_pro_num").html(product_num)
        // 加载所有选中商品总价格
        // fun();
    }) 

    // 全选按钮设置
    $("#last_all_select").click(function () {
	    if (this.checked) {
            $("#cart_pro :checkbox").prop("checked", true);
            $("#all_select ").prop("checked", true);
	    } else {
            $("#cart_pro :checkbox").prop("checked", false);
            $("#all_select").prop("checked", false);
        }
        // 单个商品总价格
        product_num=$("#cart_pro :checked").length;
        $("#_pro_num").html(product_num)
        // 加载所有选中商品总价格
        // fun();
    });


    }
    })

    //点击搜索框跳转
    $("#mh_select").click(function(){
        window.location.href="http://127.0.0.1:8080/mh_select.html";
    })

})





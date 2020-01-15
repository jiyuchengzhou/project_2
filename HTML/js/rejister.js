// function uname_bmsg(){
//     var unameMsg=document.getElementById("i_uname");
//     var unameid=document.getElementById("_name");
//     // unameMsg.innerHTML=("正确");
//     if(unameid.value.length > 20 || unameid.value.length < 6){
//         unameMsg.innerHTML=("请输入6-20位字符");
       
//     }else{
//         unameMsg.innerHTML=("正确");
//     }
// }
// function upwd_bmsg(){
//     var upwdMsg=document.getElementById("i_upwd");
//     var upwdid=document.getElementById("_upwd");
//     var bool= /^[A-Za-z0-9]{6,32}$/.test(upwdid.value);
//     if(bool){
//         upwdMsg.innerHTML=("正确");
//     }else{
//         upwdMsg.innerHTML=("6-32位数字+英文");
//     }
//     var passwordMsg=document.getElementById("i_password");
//     var passwordid=document.getElementById("_password");
//     // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
//     if(passwordid.value==upwdid.value){
//         passwordMsg.innerHTML=("正确");
//     }else{
//         passwordMsg.innerHTML=("两次输入不一致");
//     }
// }
// function password_bmsg(){
//     var upwdid=document.getElementById("_upwd");
//     var passwordMsg=document.getElementById("i_password");
//     var passwordid=document.getElementById("_password");
//     // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
//     if(passwordid.value==upwdid.value){
//         passwordMsg.innerHTML=("正确");
//     }else{
//         passwordMsg.innerHTML=("两次输入不一致");
//     }
// }
// function phone_bmsg(){
//     var phoneMsg=document.getElementById("i_phone");
//     var phoneid=document.getElementById("_phone");
//     var bool= /^1[3|4|5|7|8]\d{9}$/.test(phoneid.value);
//     if(bool){
//         phoneMsg.innerHTML=("正确");
//     }else{
//         phoneMsg.innerHTML=("号码输入错误");
//     }
// }


//跳转首页
$("#f_logo").click(function(){
    window.location.href="http://127.0.0.1:8080/index.html";
})

$(function(){
    var unameMsg=document.getElementById("i_uname");
    var unameid=document.getElementById("_name");
    $("#_name").blur(function(){
        if(unameid.value.length > 20 || unameid.value.length < 6){
            unameMsg.innerHTML=("请输入6-20位字符");
           
        }else{
            unameMsg.innerHTML=("正确");
        }
    })
    var upwdMsg=document.getElementById("i_upwd");
    var upwdid=document.getElementById("_upwd");
    $("#_upwd").blur(function(){
        
        var bool= /^[A-Za-z0-9]{6,32}$/.test(upwdid.value);
        if(bool){
            upwdMsg.innerHTML=("正确");
        }else{
            upwdMsg.innerHTML=("6-32位数字+英文");
        }
        var passwordMsg=document.getElementById("i_password");
        var passwordid=document.getElementById("_password");
        // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
        if(passwordid.value==upwdid.value){
            passwordMsg.innerHTML=("正确");
        }else{
            passwordMsg.innerHTML=("两次输入不一致");
        }
    })
    var upwdid=document.getElementById("_upwd");
    var passwordMsg=document.getElementById("i_password");
    var passwordid=document.getElementById("_password");
    $("#_password").blur(function (){
       
        // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
        if(passwordid.value==upwdid.value){
            passwordMsg.innerHTML=("正确");
        }else{
            passwordMsg.innerHTML=("两次输入不一致");
        }
    })
    var phoneMsg=document.getElementById("i_phone");
    var phoneid=document.getElementById("_phone");
    $("#_phone").blur(function(){
        
        var bool= /^1[3|4|5|7|8]\d{9}$/.test(phoneid.value);
        if(bool){
            phoneMsg.innerHTML=("正确");
        }else{
            phoneMsg.innerHTML=("号码输入错误");
        }
    })
$("#btn").click(
    function (){
        console.log("name")
        var unameMsg=document.getElementById("i_uname");
        var unameid=document.getElementById("_name");
        // unameMsg.innerHTML=("正确");
        if(unameid.value.length > 20 || unameid.value.length < 6){
            unameMsg.innerHTML=("请输入6-20位字符");
            console.log(1)
            $("#tishi").html("注册失败")
            return
        }


        var upwdMsg=document.getElementById("i_upwd");
        var upwdid=document.getElementById("_upwd");
        var bool= /^[A-Za-z0-9]{6,32}$/.test(upwdid.value);
        if(bool){
            upwdMsg.innerHTML=("正确");
        }else{
            upwdMsg.innerHTML=("6-32位数字+英文");
            $("#tishi").html("注册失败")
            console.log(2)
            return
        }
        var passwordMsg=document.getElementById("i_password");
        var passwordid=document.getElementById("_password");
        // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
        if(passwordid.value==upwdid.value){
            passwordMsg.innerHTML=("正确");
        }else{
            passwordMsg.innerHTML=("两次输入不一致");
            console.log(3)
            $("#tishi").html("注册失败")
            return
        }

        // var upwdid=document.getElementById("_upwd");
        // var passwordMsg=document.getElementById("i_password");
        // var passwordid=document.getElementById("_password");
        // // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
        // if(passwordid.value==upwdid.value){
        //     passwordMsg.innerHTML=("正确");
        // }else{
        //     passwordMsg.innerHTML=("两次输入不一致");
        // }

        var phoneMsg=document.getElementById("i_phone");
        var phoneid=document.getElementById("_phone");
        var bool= /^1[3|4|5|7|8]\d{9}$/.test(phoneid.value);
        if(bool){
            phoneMsg.innerHTML=("正确");
        }else{
            phoneMsg.innerHTML=("号码输入错误");
            $("#tishi").html("注册失败")
            console.log(4)
            return
        }
      var uname=$("#_name").val()
      var upwd=$("#_upwd").val()
      var phone=$("#_phone").val()
      console.log(uname)
      // console.log(upwd)
      // var shu={'uname':uname,'upwd':upwd,'phone':phone}
      $.ajax({
        url:'http://127.0.0.1:8080/klw/res',
        type:'get',
      //   data:JSON.stringify(shu),
        data:{uname,upwd,phone},
        dataType:'json',
        success:function(result){
          if(result==1){
              $("#tishi").html("注册成功")
              window.location.href="http://127.0.0.1:8080/login.html";              
          }else{
            $("#tishi").html("注册失败")
          }
        }
      })
    }
  )
})





// window.onload=function(){
    // 正则验证
    // function uname_msg(){
    //     var unameMsg=document.getElementById("i_uname");
    //     unameMsg.innerHTML=("123456");
    // }
    function uname_bmsg(){
        var unameMsg=document.getElementById("i_uname");
        var unameid=document.getElementById("_name");
        // unameMsg.innerHTML=("正确");
        if(unameid.value.length > 20 || unameid.value.length < 6){
            unameMsg.innerHTML=("请输入6-20位字符");
           
        }else{
            unameMsg.innerHTML=("正确");
        }
    }
    function upwd_bmsg(){
        var upwdMsg=document.getElementById("i_upwd");
        var upwdid=document.getElementById("_upwd");
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
    }
    function password_bmsg(){
        var upwdid=document.getElementById("_upwd");
        var passwordMsg=document.getElementById("i_password");
        var passwordid=document.getElementById("_password");
        // var bool= /^[A-Za-z0-9]{6,32}$/.test(passwordid.value);
        if(passwordid.value==upwdid.value){
            passwordMsg.innerHTML=("正确");
        }else{
            passwordMsg.innerHTML=("两次输入不一致");
        }
    }
    function phone_bmsg(){
        var phoneMsg=document.getElementById("i_phone");
        var phoneid=document.getElementById("_phone");
        var bool= /^1[3|4|5|7|8]\d{9}$/.test(phoneid.value);
        if(bool){
            phoneMsg.innerHTML=("正确");
        }else{
            phoneMsg.innerHTML=("号码输入错误");
        }
    }
// }





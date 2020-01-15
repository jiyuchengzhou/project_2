$(function(){
  
 
    $("#btn").click(
      function (){
        var uname=$("#iname").val()
        var upwd=$("#iupwd").val()
        var phone=$("#iphone").val()
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
            console.log(result)
          }
        })
      }
    )
  })
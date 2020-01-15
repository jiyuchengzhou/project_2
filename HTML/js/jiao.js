
$(function(){
  
 
  $("#btn").click(
    function (){
      var uname=$("#iname").val()
      var upwd=$("#iupwd").val()
      console.log(upwd)
      $.ajax({
        url:'http://127.0.0.1:8080/klw/login',
        type:'get',
        data:{uname,upwd},
        dataType:'json',
        success:function(result){
          console.log(result)
        }
      })
    }
  )
})

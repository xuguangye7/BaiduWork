$(function(){
  var $yonghu=$('#yonghu'),
      $phone=$('#phone'),
      $mima=$('#mima'),
      $zhuCe=$('#zhuce');
      $set=$('#set');
    var count=60;
    $set.click(function(){
      $set.addClass('disable').attr({'disabled':'disabled'});
      var timer=setInterval(function(){
        $set.html(count--);                           
      },1000);
      setTimeout(function(){
        $set.removeClass('disable').removeAttr('disabled');
        clearInterval(timer);
        $set.html('获取验证码');
        count=59;
      },60000);
    });
    $zhuCe.click(function(){
      if(!validate('#yonghu') || !validate('#phone') || !validate('#mima') || !validate('#yanzheng')) return;
    });
    $yonghu.focusout(function(){
      if(!validate('#yonghu')) $yonghu.select();
    });
    $phone.focusout(function(){
      if(!validate('#phone')) $phone.select();
    });
    $mima.focusout(function(){
      if(!validate('#mima')) $mima.select();
    });
    function validate(field){
      var $data=$(field),
        $msg=$(field+'-validation-message');
      if($data.val()===''){
        if(field=='#yonghu'){
          $msg.html('用户名不能为空');
        }else if(field=='#phone'){
          $msg.html('手机号不能为空');
        }else if(field=='#mima'){
          $msg.html('密码不能为空');
        }else if(field=='#yanzheng'){
          $msg.html('验证码不能为空');
        }
        $data.select();
        return false;
      } 
      if(field=='#phone'){
        if(!/^1\d{10}$/.test($data.val())){
          $msg.html('手机号码格式不正确');
          $data.select();
          return false;
        }
      }
      if(field=='#yonghu'){
        if(!/^.*[^\d].*$/.test($data.val())){
          $msg.html('用户名仅支持中英文数字和下划线，且不能为纯数字');
          $data.select();
          return false;
        }
      }
      if(field=='#yonghu'){
        if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test($data.val())){
          $msg.html('用户名仅支持中英文数字和下划线，且不能为纯数字');
          $data.select();
          return false;
        }
      }
      if(field=='#mima'){
        if(!/^[0-9a-zA-Z_]{1,}$/.test($data.val()) || ($data.val()).length<6){
          $msg.html('密码格式不符合标准');
          $data.select();
          return false;
        }
      }
      $msg.html('');
      return true;
    }
});


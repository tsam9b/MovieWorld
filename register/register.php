<?php
ob_start();
session_start();
include_once 'dbconnect.php';

$_SESSION['umbrella'] = md5(rand(1000, 9999));

?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script defer src="/js/fithouse/check_scripts.js" type="text/javascript"></script>
</head>

<body>

  <iframe class="register_target" name="register_target"></iframe>
  <div id="login-form">
    <form action="/register/register_next.php" method="post" autocomplete="off" target="register_target" onsubmit="return Check_Register_Form(event)">

      <div class="col-md-12">


        <div class="register_message alert alert-danger hidden login_errors"></div>


        <div class="form-group">
          <div class="input-group mob_dev" id="modal_reg_user">
            <span id="reg_name_message" class="error_message"></span>
            <input type="text" name="name" id="reg_name" class="form-control" placeholder="Username" maxlength="50" value="" />
          </div>
        </div>


        <div class="form-group">
          <div class="input-group mob_dev" id="modal_reg_pass">
            <span id="reg_pass_message" class="error_message"></span>
            <input type="password" name="pass" id="reg_pass" class="form-control showpassword2" placeholder="Password" maxlength="15" />
          </div>

        </div>
        <div class="show_pass2" value="no"></div>

        <button id="reg_button" type="submit" class="btn btn-block btn-primary login_buttons" name="btn-signup">Sign up</button>
      </div>

      <div id="iframe_loader2" class="iframe_loader"></div>

    </form>



  </div>

</body>

</html>
<?php ob_end_flush(); ?>


<script type="text/javascript">
  $(function() {
    $(".showpassword2").each(function(index, input) {
      var $input = $(input);
      $(".show_pass2").click(function() {
        var change = "";
        if ($(this).attr("value") === "no") {
          $(this).addClass("pass_show");
          change = "text";
          $(this).attr("value", "yes");
        } else {
          change = "password";
          $(this).removeClass("pass_show");
          $(this).attr("value", "no");
        }
        var rep = $("<input type='" + change + "' />")
          .attr("id", $input.attr("id"))
          .attr('placeholder', $input.attr('placeholder'))
          .attr("name", $input.attr("name"))
          .attr('class', $input.attr('class'))
          .val($input.val())
          .insertBefore($input);
        $input.remove();
        $input = rep;
      }).insertAfter($input);
    });
  });
</script>
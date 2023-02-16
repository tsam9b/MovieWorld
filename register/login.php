<?php
ob_start();
session_start();
if (isset($_SESSION['url']))
  $url = $_SESSION['url']; // holds url for last page visited.
?>


<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


  <?php //include('../header_info_section.php'); 
  ?>
</head>

<body>



  <iframe id="login_target" class="login_target" name="login_target"></iframe>

  <div id="login-form">
    <!--<form method="post" action="<? //php echo htmlspecialchars($_SERVER['PHP_SELF']); 
                                    ?>" autocomplete="off">-->
    <form action="/register/login_next.php" method="post" onsubmit="return Check_Login_Form(event)" target="login_target" autocomplete="off">

      <div class="col-md-12">


        <div class="login_message alert alert-danger hidden login_errors">

        </div>

        <div class="form-group">
          <div class="input-group mob_dev" id="modal_login_user">
            <span id="login_email_message" class="error_message"></span>
            <input type="text" name="email" id="login_email" class="form-control" placeholder="Username" value="" maxlength="40" />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group mob_dev" id="modal_login_pass">
            <span id="login_pass_message" class="error_message"></span>
            <input type="password" name="pass" id="login_pass" class="form-control showpassword" placeholder="Password" maxlength="20" class="scroller" />

          </div>
        </div>
        <div class="show_pass" value="no"></div>
        <button id="login_button" type="submit" class="btn btn-block btn-primary login_buttons" name="btn-login">Login</button>
        <div id="iframe_loader1" class="iframe_loader"></div>


      </div>

    </form>

    <script defer src="/js/fithouse/check_scripts.js" type="text/javascript"></script>

  </div>
  <div class="forgot_message alert hidden login_errors"></div>


  <div class="send_pass login_buttons"><a href="#"> </a></div>



</body>

</html>
<?php ob_end_flush(); ?>


<script type="text/javascript">
  $(function() {
    $(".showpassword").each(function(index, input) {
      var $input = $(input);
      $(".show_pass").click(function() {
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


  $(".accordion").click(function(e) {


    this.classList.toggle("active");
    //var panel = this.nextElementSibling;
    var panel = this.previousElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 45 + "px";
    }
  });
</script>
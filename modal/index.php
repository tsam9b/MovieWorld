<div class="header-menu-not-logged">
	<div class="ml6 flex items-center connect_menu">
		<button id="login_reg" class="sb-button sb-button--default sb-button--black mr3 container-head-fix-text2 sindesi" type="button" data-e2e="signInButton" style="min-width: 0px; min-height: 0px;">Login
		</button>
		<a class="sb-button sb-button--positive sb-button--black container-head-fix-text2 ginemelos" data-e2e="joinRewardsLink" style="min-width: 0px; min-height: 0px;">Signup</a>
	</div>
</div>





<div class="cd-user-modal"> <!-- this is the entire modal form, including the background -->
	<div class="cd-user-modal-container"> <!-- this is the container wrapper -->


		<div id="cd-login"> <!-- log in form -->

			<h3 class="modal_title"> Login </h3>

			<?php include(dirname(__DIR__) . '/register/login.php'); ?>



			<div class="cd-switcher">
				<h6 class="noselect">New user?<a href="#0">Sign up </a></h6>
			</div>

			<!-- <a href="#0" class="cd-close-form">Close</a> -->
		</div> <!-- cd-login -->

		<div id="cd-signup"> <!-- sign up form -->

			<h3 class="modal_title"> Sign up </h3>


			<?php include(dirname(__DIR__) . '/register/register.php'); ?>

			<div class="cd-switcher login_errors">
				<h6 class="noselect">Already a member? <a href="#0">Login</a></h6>
			</div>


			<!-- <a href="#0" class="cd-close-form">Close</a> -->
		</div>


		<button type="button" class="close noselect" data-dismiss="modal" aria-hidden="true">×</button>
	</div> <!-- cd-user-modal-container -->




</div> <!-- cd-user-modal-->

<script>
	$(".send_pass").click(function(e) {


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
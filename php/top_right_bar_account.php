<?php
ob_start();
session_start();


if (isset($_SESSION['userRow'])) {
	$userRow = $_SESSION['userRow'];
}

if (isset($_SESSION['users'])) {
	$usrid = $_SESSION['user_id'];
	$edit_info_query = $link->prepare("SELECT * FROM users WHERE ID =:uid ");
	$edit = $edit_info_query->execute(array("uid" => $usrid));
	$edit_row = $edit_info_query->fetchAll(PDO::FETCH_ASSOC);
	$edit_row = $edit_row[0];

	/*$enroll_query = $link->prepare("SELECT * FROM enrollments WHERE User_id =:uid ");
		  $enroll = $enroll_query->execute(array("uid" => $usrid));
		  $enroll_row = $enroll_query->fetchAll(PDO::FETCH_ASSOC);
		  $enroll_row = $enroll_row[0];*/
}



/*
if (isset($_SESSION['cookies_acc']) ){
	if ($_SESSION['cookies_acc'] == "Yes"  ){
		$g_query2 = "UPDATE users SET Cookies = 'Yes' WHERE ID = ".$_SESSION['user_id'];
		$g_res2 = mysqli_query($conn, $g_query2);
		unset($_SESSION['cookies_acc']);
	}
	else if ($_SESSION['cookies_acc'] == "No"  ){
		$g_query2 = "UPDATE users SET Cookies = 'No' WHERE ID = ".$_SESSION['user_id'];
		$g_res2 = mysqli_query($conn, $g_query2);
		unset($_SESSION['cookies_acc']);
	}	

}
*/
?>

<!--<script defer src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="625757531615-q81rq2ut4uo78aahje4mpsf8ckdhfb61.apps.googleusercontent.com">-->

<div class="header-menu-logged">
	<ul>
		<li class="headerli">
			<a class="user_image" id="show_infos" href="javascript:void(0)"><span><?php echo $userRow["Name"] ?></span>
				<img class="user_pic" src="/images/avatar.png" />
			</a>
		</li>
	</ul>


	<div id="user_infos" class="dropdown-content">
		<a class="login" id="profile" onclick="Logout();">Αποσύνδεση</a>
	</div>


	<script type="text/javascript">
		var modal2 = "close";

		function signOut() {
			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function() {
				console.log('User signed out.');
			});
		}


		$(function() {
			$(".user_image").on("click", function() {
				/*document.getElementById("user_notifications").classList.remove("show");
				document.getElementById("user_favorites").classList.remove("show");*/
				document.getElementById("user_infos").classList.toggle("show");

				modal2 = "open";
			});
		});



		window.onclick = function(event) {
			//console.log(modal);
			if (modal2.localeCompare("open") == 0) {
				if ((!event.target.matches('.user_pic')) && (!event.target.matches('.user_image span')) && (!event.target.matches('.userfav')) && (!event.target.matches('.alarm')) && (!event.target.matches('.notif_num')) && (!event.target.matches('.three_dots'))) {
					modal2 = "close";
					console.log("kleise ta modal");
					var dropdowns = document.getElementsByClassName("dropdown-content");
					var i;
					for (i = 0; i < dropdowns.length; i++) {
						var openDropdown = dropdowns[i];
						if (openDropdown.classList.contains('show')) {
							openDropdown.classList.remove('show');
						}
					}
				}
			}
			if ($(".left_menu.edit_info").hasClass("visible")) {
				if ((!event.target.matches('.left_menu.edit_info')) && (!event.target.matches('.icon.left_menu-toggler')))
					$(".left_menu").removeClass("visible");
			}

		}
	</script>


</div><!--header-menu-logged-->
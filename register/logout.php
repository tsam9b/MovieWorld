<script src="https://apis.google.com/js/platform.js" async defer></script>
<meta name="google-signin-client_id" content="625757531615-q81rq2ut4uo78aahje4mpsf8ckdhfb61.apps.googleusercontent.com">
<div class="g-signin2" data-onsuccess="onSignIn"></div>

<?php

	session_start();
	

	if(isset($_SESSION['url'])) {
   		$url = $_SESSION['url']; // holds url for last page visited.
		//echo $url;
	}
	 $tmp = "empty";
	 if(isset($_SESSION['fb_users'])) {
	 	if ( ($_SESSION['fb_users']!="") && ($_SESSION['fb_users']!="undefined")  ){
	 		$tmp = $_SESSION['fb_users'];
	 	}
	 }

	 if(array_key_exists('logout',$_GET))
	 {
		session_start();
		unset($_SESSION['userdata']);
		session_destroy();
	 }
	
	if (isset($_GET['logout'])) {
		unset($_SESSION['users']);
		session_unset();
		session_destroy();
		
	}
 	if ($tmp!="empty"){
		session_start();
		$_SESSION['fb_users'] = $tmp;
	}
		echo $url;
		header("Location:".$url);
		exit;



?>

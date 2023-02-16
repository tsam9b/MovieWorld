<?php
include '../register/dbconnect.php';
ob_start();
session_start();

if(isset($_SESSION['users']) ){
	$user_id = $_SESSION['user_id'];
	echo $user_id;
}
else{
	echo 0;
}
?>
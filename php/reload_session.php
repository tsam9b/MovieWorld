<?php
setcookie("PHPSESSID", session_id(), time() + ini_get("session.cookie_lifetime"));
/*include '../register/dbconnect.php';*/
ob_start();
session_start();


/*$_SESSION['users'] = $_SESSION['users'];
$_SESSION['user_id'] = $_SESSION['user_id'];
$_SESSION['email'] = $_SESSION['email'];
$_SESSION['username'] = $_SESSION['username'];
$_SESSION['image'] =  $_SESSION['image'];
$_SESSION['userRow'] =  $_SESSION['userRow'];
$_SESSION['Status'] =$_SESSION['Status'];
$_SESSION['Role'] = $_SESSION['Role'];*/


echo "session reloaded";
?>
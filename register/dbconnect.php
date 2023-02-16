<?php

// this will avoid mysqli_connect() deprecation error.
error_reporting(~E_DEPRECATED & ~E_NOTICE);
// but I strongly suggest you to use PDO or mysqlii.

define('DBHOST', 'localhost');
define('DBUSER', 'u814015608_xxxxx');
define('DBPASS', 'xxxxxx');
define('DBNAME', 'xxxxxxxn');

$mysqli = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

$conn = mysqli_connect(DBHOST, DBUSER, DBPASS);

/* FOR PDOS**/
$dbhost = "localhost";
$dbname =  "u814015608_travelstaytion";

$link = new PDO("mysql:host=$dbhost;dbname=$dbname", DBUSER, DBPASS);
$link->exec("set names utf8");
$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


/* FOR PDOS**/

$dbcon = mysqli_select_db($conn, DBNAME) or die(mysqli_error($conn));


mysqli_set_charset($mysqli, "utf8");
mysqli_set_charset($conn, "utf8");


if (!$conn) {
	die("Connection failed : " . mysqli_error());
}

if (!$dbcon) {
	die("Database Connection failed : " . mysqli_error());
}

//include($_SERVER['DOCUMENT_ROOT'] . '/config.php');
//include($_SERVER['DOCUMENT_ROOT']);

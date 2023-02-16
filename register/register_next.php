<?php
ob_start();
session_start();
/*if( isset($_SESSION['users'])!="" ){
		header("Location: index.php");
	}*/

if (isset($_SESSION['users']) != "") {
	header("Location: /index.php");
}

include_once 'dbconnect.php';
//require '../PHPMailer/PHPMailerAutoload.php';
//include 'send_template_function.php';

$error = false;

echo 'egbjk0';
/*function old_tiger($data, $width=192, $rounds = 3) {
    return substr(
        implode(
            array_map(
                function ($h) {
                    return str_pad(bin2hex(strrev($h)), 16, "0");
                },
                str_split(hash("tiger192,$rounds", $data, true), 8)
            )
        ),
        0, 10-(192-$width)/4
    );
	
	}*/


$usid = $_SESSION['usid'];
$cont = $_SESSION['cont'];

// clean user inputs to prevent sql injections
$name = trim($_POST['name']);
$name = strip_tags($name);
$name = htmlspecialchars($name);

/*$email = trim($_POST['email']);
$email = strip_tags($email);
$email = htmlspecialchars($email);*/

$pass = trim($_POST['pass']);
$pass = strip_tags($pass);
$pass = htmlspecialchars($pass);


// basic name validation
if (empty($name)) {
	$error = true;
	$error_msg = "Please enter a username.";
} else if (strlen($name) < 3) {
	$error = true;
	$error_msg = "The username must have at least 3 characters";
} else if (!preg_match('/^[a-zA-Z0-9\_]+$/', $name)) {
	$error = true;
	$error_msg = "Username must not include special characters except for '_'";
} else {
	$sql = $link->prepare("SELECT Name FROM users WHERE Name = :name");
	$res = $sql->execute(array("name" => $name));

	if ($sql->rowCount() > 0) {
		$error = true;
		$error_msg = "This username is already in use";
	}
}


// password validation
if (empty($pass)) {
	$error = true;
	$error_msg = "Please enter a password";
} else if (strlen($pass) < 6) {
	$error = true;
	$error_msg = "The password must be at least 6 characters long";
}

//basic email validation
// if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
// 	$error = true;
// 	$error_msg = "Παρακαλώ προσθέστε ένα έγκυρο email.";
// } else {

// 	$sql = $link->prepare("SELECT Email FROM users WHERE Email = :email");
// 	$res = $sql->execute(array("email" => $email));

// 	echo "Email: " . $email;
// 	echo "Column: " . $sql->rowCount();

// 	echo "<br>rowCount = " . $sql->rowCount();

// 	if ($sql->rowCount() > 0) {
// 		$error = true;
// 		$error_msg = "Το email αυτό χρησιμοποείται ήδη.";
// 		echo "<br>" . $error_msg;
// 	}
// }




// password encrypt using SHA256();
$password = hash('sha256', $pass);

// if there's no error, continue to signup
if (!$error) {

	$bytes = random_bytes(4);
	//$verification_code = var_dump(bin2hex($bytes));
	//$verification_code = bin2hex(mcrypt_create_iv(4, MCRYPT_DEV_URANDOM));
	//$verification_code = md5(uniqid(rand(), true));
	echo "<br>name = " . $name;
	echo "<br>password = " . $password;
	//echo "<br>verification_code = ".$verification_code;

	try {

		$sql = $link->prepare("INSERT INTO users(Name, Password) 
										VALUES(:name, :password)");
		$res = $sql->execute(array(
			"name" => $name,
			"password" => $password
		));
	} catch (Exception $e) {
		echo 'Exception -> ';
		var_dump($e->getMessage());
	}

	if ($res) {
		$_SESSION['users'] = $link->lastInsertId();
		$_SESSION['user_id'] = $_SESSION['users'];
		// $_SESSION['email'] = $email;
		$_SESSION['username'] = $name;
		$errTyp = "success";

		$users = "SELECT * FROM users WHERE ID = '" . $_SESSION['users'] . "'";
		$res = mysqli_query($conn, $users);
		$usr = mysqli_fetch_array($res);
		$_SESSION['user_id'] = $usr['ID'];
		$_SESSION['image'] =  $usr["Image"];
		$_SESSION['userRow'] =  $usr;

		unset($name);
		//unset($email);
		unset($pass);
		echo "success";

		echo "<script>window.parent.setTimeout(\"location.href = '/index.php';\",0);</script>";
	}
} else {
	//echo $error_msg;
	echo "<script>
						window.parent.$('.register_message').html('" . $error_msg . "');
						window.parent.$('.register_message').fadeIn(1000);
						if(window.parent.$('.register_message').hasClass('hidden')){
							window.parent.$('.register_message').toggleClass('hidden');
						}
						window.parent.$('#iframe_loader2').hide();
						window.parent.$('#reg_button').show();
						
						window.parent.$('#piframe_loader2').hide();
						window.parent.$('#preg_button').show();

				</script>";
}

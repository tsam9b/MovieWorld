<?php
	ob_start();
	session_start();
	require_once 'dbconnect.php';
	echo "<br>current_url = ". $current_url;
	

	$error = false;
	
	if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
	 echo 'Fithouse.gr is protected with all legal rights. Your actions intent to violate those rights.  
	 If you keep acting similar actions, Fithouse.gr has the right to accuse you for legal rights violation';

	 
	//die();
}

		
		// prevent sql injections/ clear user invalid inputs
		$email = trim($_POST['email']);
		$email = strip_tags($email);
		$email = htmlspecialchars($email);
		
		$pass = trim($_POST['pass']);
		$pass = strip_tags($pass);
		$pass = htmlspecialchars($pass);
		// prevent sql injections / clear user invalid inputs
		
		
		
		
		if(empty($email)){
			$error = true;
			$error_msg = "Παρακαλώ εισάγετε Email ή Username.";
			echo $error_msg;
		} 
		else if(empty($pass)){
			$error = true;
			$error_msg = "Παρακαλώ εισάγετε κωδικό.";
			echo $error_msg;
		}
		
		// if there's no error, continue to login
	if (!$error) {
			
			/*Username*/
			if (!filter_var($email,FILTER_VALIDATE_EMAIL) ) {
				//$emailError = "Η μορφή του Email δεν είναι σωστή.";
				$sql = $link->prepare("SELECT * FROM users WHERE Name= :name");
				$res = $sql->execute(array("name" => $email));
			}
			else{/*Email*/
				$sql = $link->prepare("SELECT * FROM users WHERE Email= :email");
				$res = $sql->execute(array("email" => $email));
			}
			
			$password = hash('sha256', $pass); // password hashing using SHA256

			$row = $sql->fetchAll(PDO::FETCH_ASSOC);
			$row = $row[0];
			
			//echo '<script>console.log("Pass ='.$pass.'")</script>';
			//echo '<script>console.log("Forgot_Code = ' . $row['Forgot_Code'].'")</script>';
				
			if(($res) && ( ($row['Password']==$password)||($row['Forgot_Code']==$pass) ) ){
				$_SESSION['users'] = $row['ID'];
				$_SESSION['user_id'] =$_SESSION['users'];
				$_SESSION['email'] = $row['Email'];
				$_SESSION['username'] = $row['Name'];
				
				$users = "SELECT * FROM users WHERE ID = '".$row['ID']."'";
				$res = mysqli_query($conn, $users);
				$usr=mysqli_fetch_array($res);

				$_SESSION['image'] =  $usr["Image"];
				$_SESSION['userRow'] =  $usr;
				$_SESSION['Status'] = $usr['Status'];
				$_SESSION['Role'] = $usr['Role'];
				/*$_SESSION['user_address'] = $usr['Street'];
				$_SESSION['user_number'] = $usr['Street_Number'];
				$_SESSION['user_postal_code'] = $usr['Postal_Code'];
				$_SESSION['user_city'] =  $usr['Region'];
				$_SESSION['user_lati'] = $usr['Latitude'];
				$_SESSION['user_longi'] = $usr['Longitude'];
				$_SESSION['distance'] = $usr['Distance'];*/
				
				echo "success";
				
				echo "<script>
						window.parent.$('#iframe_loader1').hide();
						window.parent.$('#login_button').show();
						window.parent.setTimeout(\"location.href = '".$_SESSION['url']."';\",0);

				</script>";
			} 
			else {
				
				echo "<script>
						window.parent.$('.login_message').html('To Email ή ο Κωδικός σας είναι λάθος');
						window.parent.$('.login_message').fadeIn(500);
						if(window.parent.$('.login_message').hasClass('hidden'))
						{
							window.parent.$('.login_message').toggleClass('hidden');
						}
						window.parent.$('#iframe_loader1').hide();
						window.parent.$('#login_button').show();

				</script>";
			}
				
		}
		else{
			
			echo "<script>
						window.parent.$('.login_message').html('".$error_msg."');
						window.parent.$('.login_message').fadeIn(500);
						if(window.parent.$('.login_message').hasClass('hidden'))
						{
							window.parent.$('.login_message').toggleClass('hidden');
						}
						window.parent.$('#iframe_loader1').hide();
						window.parent.$('#login_button').show();

				</script>";
		}
		

?>



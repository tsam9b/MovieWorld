<?php
ob_start();
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include '../register/dbconnect.php';
//include '../register/send_template_function.php';


if (isset($_SESSION['users'])) {
    $user_id = $_SESSION['user_id'];
    $query = $link->prepare("SELECT * FROM users WHERE ID =:uid ");
    $q = $query->execute(array("uid" => $user_id));
    $user_row = $query->fetchAll(PDO::FETCH_ASSOC);
    $user_row = $user_row[0];
} else {
    $user_id = 0;
    echo "<script>window.parent.$('#login_reg').trigger('click');</script>";
    die();
}

function clean_input($input)
{

    $cleaned = trim($input);
    $cleaned = strip_tags($cleaned);
    $cleaned = htmlspecialchars($cleaned);

    return $cleaned;
}


$mtitle = clean_input($_POST['mtitle']);
$mdesc = clean_input($_POST['mdesc']);

$error = false;

/**Email*/
if ($mtitle == "") {
    echo "<script>window.parent.$('#mtitle').addClass('input_required');</script>";
    $error = true;
}

/**Messsage*/
if ($mdesc == "") {
    echo "<script>window.parent.$('#mdesc').addClass('input_required');</script>";
    $error = true;
}

echo "<br>mtitle = " . $mtitle;
echo "<br>mdesc = " . $mdesc;


try {
    $sql = $link->prepare("INSERT INTO movies(Title, Description, Postedby_uderid,	Postedby_username ) 
                                    VALUES(:mtitle, :mdesc, :user_id, :user_name)");
    $res = $sql->execute(array(
        "mtitle" => $mtitle,
        "mdesc" => $mdesc,
        "user_id" => $user_id,
        "user_name" => $_SESSION['username']
    ));

    echo "<script>
            window.parent.$('#open_comodal').trigger('click');
            window.parent.console.log('message sent');
        </script>";
} catch (Exception $e) {
    echo 'Exception -> ';
    var_dump($e->getMessage());

    echo "<script>
			window.parent.$('.feedback_message').html('An error occured. Try again later');
			window.parent.$('.feedback_message').fadeIn(500);
			if(window.parent.$('.feedback_message').hasClass('hidden')){
				window.parent.$('.feedback_message').toggleClass('hidden');
			}
			window.parent.console.log('message not sent');
		</script>";
}

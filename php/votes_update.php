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
}

function clean_input($input)
{

    $cleaned = trim($input);
    $cleaned = strip_tags($cleaned);
    $cleaned = htmlspecialchars($cleaned);

    return $cleaned;
}



$smode = clean_input($_POST['smode']);
$movieid = clean_input($_POST['movieid']);

$error = false;

if ($smode == "") {
    echo "<script>window.parent.$('#mtitle').addClass('input_required');</script>";
    $error = true;
}
if ($movieid == "") {
    echo "<script>window.parent.$('#mdesc').addClass('input_required');</script>";
    $error = true;
}




/*Find the total votes*/
try {
    $sql = $link->prepare("SELECT Likes, Dislikes FROM movies WHERE ID = :movieid");
    $res = $sql->execute(array(
        "movieid" => $movieid
    ));
    $votes_row = $sql->fetchAll(PDO::FETCH_ASSOC);
    $votes_row = $votes_row[0];

    $like_sum = $votes_row['Likes'];
    $dislike_sum = $votes_row['Dislikes'];

    if ($votes_row['Postedby_uderid'] == $user_id) {
        die();
    }
} catch (Exception $e) {
    echo 'Exception -> ';
    var_dump($e->getMessage());

    echo "Error in sum finding";
}


echo "<br>smode = " . $smode;
echo "<br>movieid = " . $movieid;
echo "<br>like_sum = " . $like_sum;
echo "<br>dislike_sum = " . $dislike_sum;
echo "<br>user_id = " . $user_id;


if ($smode == "like") {
    $smode = "Like";
} else if ($smode == "dislike") {
    $smode = "Dislike";
} else {
    echo "Error";
}

function like_clicked($movieid, $like_sum)
{
    echo "<script>
            window.parent.$('#like_" . $movieid . "').addClass('like_filled');
            window.parent.$('#dislike_" . $movieid . "').removeClass('dislike_filled');

        </script>";
}

function dislike_clicked($movieid, $dislike_sum)
{
    echo "<script>
    window.parent.$('#dislike_" . $movieid . "').addClass('dislike_filled');
    window.parent.$('#like_" . $movieid . "').removeClass('like_filled');

</script>";
}


function remove_like($movieid, $like_sum)
{
    echo "<script>
    if(!window.parent.$('#like_" . $movieid . "').hasClass('vote')){
        window.parent.$('#like_" . $movieid . "').addClass('vote');
    }
    window.parent.$('#like_" . $movieid . "').removeClass('like_filled');

</script>";
}

function remove_dislike($movieid, $dislike_sum)
{
    echo "<script>
    window.parent.$('#dislike_" . $movieid . "').removeClass('dislike_filled');
</script>";
}

function update_sums($movieid, $like_sum, $dislike_sum)
{
    echo "<script>
    window.parent.$('#mvotes_like_" . $movieid . "').html('" . $like_sum . "');
    window.parent.$('#mvotes_dislike_" . $movieid . "').html('" . $dislike_sum . "');
</script>";
}

try {
    $sql = $link->prepare("SELECT * FROM votes WHERE Movie_id = :movieid AND User_id = :user_id");
    $res = $sql->execute(array(
        "movieid" => $movieid,
        "user_id" => $user_id
    ));

    $votes_row = $sql->fetchAll(PDO::FETCH_ASSOC);
    $votes_row = $votes_row[0];
    echo "<br>Found Entry = " . $votes_row['ID'];
    echo "<br>Found Vote = " . $votes_row['Vote'];
    if ($votes_row['ID'] > 0) {
        if ($votes_row['Vote'] != $smode) {

            echo "<br>Vote != smode";
            $sql = $link->prepare("UPDATE votes SET Vote = :smode WHERE ID = :movieid");
            $res = $sql->execute(array(
                "smode" => $smode,
                "movieid" => $votes_row['ID']
            ));

            if ($smode == "Like") {
                $like_sum = $like_sum + 1;
                $dislike_sum = $dislike_sum - 1;
                like_clicked($movieid, $like_sum);
            } else if ($smode == "Dislike") {
                $like_sum = $like_sum - 1;
                $dislike_sum = $dislike_sum + 1;
                dislike_clicked($movieid, $dislike_sum);
            }
        } else {
            echo "<br>Remove Vote";
            $sql = $link->prepare("DELETE FROM votes WHERE ID = :movieid");
            $res = $sql->execute(array(
                "movieid" => $votes_row['ID']
            ));

            if ($smode == "Like") {
                $like_sum = $like_sum - 1;
                remove_like($movieid, $like_sum);
            } else if ($smode == "Dislike") {
                remove_dislike($movieid, $dislike_sum);
                $dislike_sum = $dislike_sum - 1;
            }
        }
    } else {
        $sql = $link->prepare("INSERT INTO votes(Movie_id, User_id, Vote) 
            VALUES(:movieid, :user_id, :smode)");
        $res = $sql->execute(array(
            "movieid" => $movieid,
            "user_id" => $user_id,
            "smode" => $smode
        ));

        if ($smode == "Like") {
            $like_sum = $like_sum + 1;

            $sql = $link->prepare("UPDATE movies SET Likes = :like_sum WHERE ID = :movieid");
            $res = $sql->execute(array(
                "like_sum" => $like_sum,
                "movieid" => $movieid
            ));
            like_clicked($movieid, $like_sum);
        } else if ($smode == "Dislike") {
            $dislike_sum = $dislike_sum + 1;

            $sql = $link->prepare("UPDATE movies SET Dislikes = :dislike_sum WHERE ID = :movieid");
            $res = $sql->execute(array(
                "dislike_sum" => $dislike_sum,
                "movieid" => $movieid
            ));
            dislike_clicked($movieid, $dislike_sum);
        } else {
            echo "Something is wrong";
        }
    }

    $sql = $link->prepare("UPDATE movies SET Likes = :like_sum, Dislikes = :dislike_sum WHERE ID = :movieid");
    $res = $sql->execute(array(
        "like_sum" => $like_sum,
        "dislike_sum" => $dislike_sum,
        "movieid" => $movieid
    ));
    update_sums($movieid, $like_sum, $dislike_sum);
} catch (Exception $e) {
    echo 'Exception -> ';
    var_dump($e->getMessage());
    echo "error";
}

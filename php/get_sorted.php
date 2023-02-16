<?php
ob_start();
session_start();
/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/
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

$byuserid = $_POST['byuserid'];
$order = $_POST['order'];

$sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username, DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
FROM movies ORDER BY Date_Registry DESC");

if ($order == "byLikes") {
    $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username, DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
                        FROM movies ORDER BY Likes DESC");
    $res = $sql->execute(array());
} else if ($order == "byDislikes") {
    $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username,  DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
    FROM movies ORDER BY Dislikes DESC");
    $res = $sql->execute(array());
} else if ($order == "byDates") {
    $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username, DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
    FROM movies ORDER BY Date_Registry DESC");
    $res = $sql->execute(array());
} else if ($order == "byUser") {
    $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username,  DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
    FROM movies WHERE Postedby_uderid = :byuserid");
    $res = $sql->execute(array(
        "byuserid" => $byuserid
    ));
} else {
    $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username,  DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date 
    FROM movies ORDER BY Date_Registry DESC");
}

echo '<h2 class="mtitle"> Movie World </h2>
<h4 class="msubtitle"> Found <span id="movies_num"> </span> movies </h4>';

$movie_num = 0;
foreach ($sql->fetchAll(PDO::FETCH_ASSOC) as $mrow) {
    $like_voted = "";
    $dislike_voted = "";
    $movie_num++;

    $sql2 = $link->prepare("SELECT * FROM votes WHERE Movie_id = :movieid AND User_id = :user_id");
    $res2 = $sql2->execute(array(
        "movieid" => $mrow['ID'],
        "user_id" => $_SESSION['user_id']
    ));
    $row2 = $sql2->fetchAll(PDO::FETCH_ASSOC);
    $row2 = $row2[0];

    if ($row2['ID'] > 0) {
        if ($row2['Vote'] == "Like") {
            $like_voted = "like_filled";
        }
        if ($row2['Vote'] == "Disike") {
            $dislike_voted = "dislike_filled";
        }
    }

    if ($mrow['Postedby_uderid'] == $_SESSION['user_id']) {
        $disabled = "disabled_vote";
    } else {
        $disabled = "votethis";
    }

    if (isset($_SESSION['users'])) {
        $require_login = "";
    } else {
        $require_login = "require_login";
    }

    echo '
    <div class="movie_card" id="bright">
    <div class="info_section">
      <div class="movie_header">
        <h1>' . $mrow['Title'] . '</h1>
        <h4>Published on ' . $mrow['published_date'] . '  by <span class="userspan filter" filter="byUser" byuserid=' . $mrow['Postedby_uderid'] . '> ' . $mrow['Postedby_username'] . '</span></h4>
      </div>
      <div class="movie_desc">
        <p class="movie_desc_text">' . $mrow['Description'] . '</p>
      </div>
      <div class="movie_social">
        <ul>
          <li><span id="like_' . $mrow['ID']  . '" class="' . $require_login  . ' material-symbols-outlined ' . $like_voted  . ' like ' . $disabled  . ' vote" smode= "like" movieid = "' . $mrow['ID']  . '">
              thumb_up
            </span></li>
          <span id="mvotes_like_' . $mrow['ID']  . '">' . $mrow['Likes'] . '</span>

          <li><span id="dislike_' . $mrow['ID']  . '"  class="' . $require_login  . ' material-symbols-outlined ' . $dislike_voted  . ' dislike ' . $disabled  . ' vote " smode= "dislike" movieid = "' . $mrow['ID']  . '">
              thumb_down
            </span></li>
          <span id="mvotes_dislike_' . $mrow['ID']  . '">' . $mrow['Dislikes'] . '</span>

        </ul>
      </div>
    </div>
    <div class="blur_back bright_back"></div>
  </div>';
}

echo '<script>$("#movies_num").html("' . $movie_num . '")</script>';

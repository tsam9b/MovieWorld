<?php

ob_start();
ob_start();
ini_set('session.gc_maxlifetime', 8 * 60 * 60 * 24);
session_set_cookie_params(8 * 60 * 60 * 24);
session_start();
require_once 'register/dbconnect.php';

$cur_url = $_SERVER['REQUEST_URI'];
$_SESSION['url'] = $cur_url;

/*  $tokens = explode('/', $cur_url);
    for ($i=0; $i< sizeof($tokens); $i++){
    if ($tokens[$i] == "usid"  )
      $usid = $tokens[$i+1];  
    if ($tokens[$i] == "cont"  )
      $cont = $tokens[$i+1];      
  }
  $_SESSION['usid'] = $usid;  
  $_SESSION['cont'] = $cont;
*/

?>



<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Travelstaytion Movies Hub</title>
  <link href="css/bootstrap.css" rel="stylesheet">
  <link href="css/sbux.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />




</head>



<body class="arxiki_page eklironomos_css">
  <!--<script  src="js/jquery-1.11.0.min.js"></script>--->
  <?php include('includes.php'); ?>
  <script src="modal/js/main.js"></script>



  <!-- https://dribbble.com/shots/10128438-Tailwind-Exploration-Status-Filter -->

  <body class="flex flex-col items-center py-16 bg-gray-100">

    <!--Notify Circle -->

    <!--<link rel="stylesheet" type="text/css" href="notifycircle/css/ns-default.css" />
  <link rel="stylesheet" type="text/css" href="notifycircle/css/ns-style-growl.css" />
  <script src="notifycircle/js/modernizr.custom.js"></script>
  <script async defer src="notifycircle/js/classie.js"></script>
  <script async defer src="notifycircle/js/notificationFx.js"></script>-->


    <?php include('header_info_section.php'); ?>
    <link href="css/movies.css" rel="stylesheet" type="text/css">
    <script src="modal/js/main.js"></script>

    <iframe id="movie_iframe" name="movie_iframe" class="hidden"></iframe>
    <section id="container_box" class="container_box">

      <h2 class="mtitle"> Movie World </h2>
      <h4 class="msubtitle"> Found <span id="movies_num"> x </span> movies </h4>

      <?php
      $movie_num = 0;
      $sql = $link->prepare("SELECT ID, Title, Description, Likes, Dislikes, Postedby_uderid, Postedby_username, DATE_FORMAT(Date_Registry, '%d/%m/%Y') as published_date FROM movies");
      $res = $sql->execute(array());
      foreach ($sql->fetchAll(PDO::FETCH_ASSOC) as $mrow) {
        $like_voted = "";
        $dislike_voted = "";
        $require_login = "";
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
          if ($row2['Vote'] == "Dislike") {
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
      ?>
    </section>



    <ul id="filter1" class="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4">
      <li class="filter-switch-item flex relative h-8 bg-gray-300x filter" filter="byLikes">
        <input type="radio" name="filter1" id="filter1-1" class="sr-only">
        <label for="filter1-1" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow filter_label">
          Likes
        </label>
      </li>
      <li class="filter-switch-item flex relative h-8 bg-gray-300x filter" filter="byDislikes">
        <input type="radio" name="filter1" id="filter1-2" class="sr-only">
        <label for="filter1-2" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow filter_label">
          Hates
        </label>
      </li>
      <li class="filter-switch-item flex relative h-8 bg-gray-300x filter" filter="byDates">
        <input type="radio" name="filter1" id="filter1-3" class="sr-only">
        <label for="filter1-3" class="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow filter_label">
          Dates
        </label>
      </li>
    </ul>



    <script>
      $(document).ready(function() {
        $(document).on('click', '.votethis', function() {
          console.log("votes clicked");
          var smode = $(this).attr("smode");
          var movieid = $(this).attr("movieid");
          $.ajax({
            url: "/php/votes_update.php",
            type: "POST",
            data: {
              "smode": smode,
              "movieid": movieid
            },
            success: function(data) {
              $('#movie_iframe').html(data);
              console.log(data);
            }
          });

        });
      });


      $(document).ready(function() {
        $(document).on('click', '.filter', function() {

          $('.filter-switch-item').find('.filter_label').removeClass('filter_label_selected');
          $(this).find('.filter_label').addClass('filter_label_selected');
          var order = $(this).attr("filter");

          var byuserid;
          if ($(this).attr("filter").localeCompare("byUser") == 0) {
            byuserid = $(this).attr("byuserid");
          } else {
            byuserid = null;
          }

          $.ajax({
            url: "/php/get_sorted.php",
            type: "POST",
            data: {
              "order": order,
              "byuserid": byuserid
            },
            success: function(data) {
              $('#container_box').html(data);;
            }
          });

        });



        $(document).on('click', '.require_login', function() {
          $('#login_reg').trigger('click');
        });
      });
    </script>

    <?php include('footer_info_section.php'); ?>
  </body>
  <!-- <script src="./js/intro_page.js"></script> -->



</html>
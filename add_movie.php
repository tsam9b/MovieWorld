<?php

ob_start();
session_start();
require_once 'register/dbconnect.php';

if (isset($_SESSION['users'])) {
    $usrid = $_SESSION['user_id'];
    echo "";
} else {
    $user_email = '';
    $full_name = '';
    echo "<script>
            $('#login_reg').trigger('click');
            </script>";
    die();
}

?>



<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Travelstaytion Movies Hub</title>
    <link href="css/bootstrap.css" rel="stylesheet">

    <link href="css/multiColumnTemplate.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="css/sbux.css" rel="stylesheet" type="text/css">
    <script src="https://use.fontawesome.com/6361912a3c.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>



</head>



<body class="contact_page">


    <?php include('includes.php'); ?>

    <?php include('header_info_section.php'); ?>
    <link href="css/movies.css" rel="stylesheet" type="text/css">

    <div>
        <div class="movie_form_container">
            <a href=""></a>
            <h3 style="text-align: center;">Φόρμα Επικοινωνίας</h3>
            <iframe id="movie_form_target" name="movie_form_target" class="hidden"></iframe>
            <form id="movie-form" target="movie_form_target" action="/php/add_movie_next.php" method="post" enctype="multipart/form-data">
                <a name="contact"></a>

                <label>Title</label>
                <input class="input-field" type="text" name="mtitle" id="mtitle">

                <label>Description</label>
                <textarea class="input-field" name="mdesc" id="mdesc"></textarea>

                <input id="submit-btn" type="submit" value="Submit">
            </form>
        </div>




        <div class="container">
            <!-- Trigger the modal with a button -->
            <button id="open_comodal" type="button" class="btn btn-info btn-lg hidden" data-toggle="modal" data-target="#myModal">Open Modal</button>

            <!-- Modal -->
            <div class="modal fade contact_modal" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title"></h4> Thank you for posting! </h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

    <?php include('footer_info_section.php'); ?>

</body>


<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
    $(document).on('focus', '.input-field', function() {
        $(this).removeClass('input_required');
    });



    $('#movie_menu').find('a').addClass('active_tab');
    $('#homepage_menu').find('a').removeClass('active_tab');
</script>

</html>
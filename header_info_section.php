<div class="head-section">
  <div class="header-logo_2">
    <a href="/index.php">
      <div class="back_logo">
      </div>
    </a>
  </div>

  <?php
  /*
$users = "SELECT * FROM users WHERE ID = '1'";
        $res = mysqli_query($conn, $users);
        $usr=mysqli_fetch_array($res);


        $_SESSION['image'] =  $usr["Image"];
        $_SESSION['userRow'] =  $usr;
        $_SESSION['users'] = $usr['ID'];
        $_SESSION['user_id'] =$usr['ID'];
        $_SESSION['email'] = $usr['Email'];
        $_SESSION['username'] = $usr['Name'];
*/

  ?>


  <div class="header-menu eklironomos_css">

    <div class="flex-shrink-none">
      <ul>
        <li class="sb-globalNav__desktopListItem menu_item arxiki_li">
          <a id="homepage_menu" class="sb-globalNav__desktopLink inline-block text-noUnderline text-upper 
          text-bold text-xxs container-head-fix-text" data-e2e="orderHamburgerNavPushViewBtn" href="/index.php">Home</a>
        </li>

        <?php if ((isset($_SESSION['users']))) { ?>
          <li id="movie_menu" class="sb-globalNav__desktopListItem menu_item service_li">
            <a class="sb-globalNav__desktopLink inline-block text-noUnderline text-upper 
          text-bold text-xxs container-head-fix-text" data-e2e="hamburgerNavCards" href="/add_movie.php">Add Movie</a>
          </li>
        <?php } else { ?>
          <li id="movie_menu" class="sb-globalNav__desktopListItem menu_item service_li">
            <a class="sb-globalNav__desktopLink inline-block text-noUnderline text-upper 
          text-bold text-xxs container-head-fix-text" data-e2e="hamburgerNavCards" onclick="$('#login_reg').trigger('click')">Add Movie</a>
          </li>
        <?php } ?>
      </ul>
    </div>


  </div>

  <?php
  if ((isset($_SESSION['users']))) {
    include('php/top_right_bar_account.php');
  } else {
    // include('php/top_right_bar_account.php');
    include('modal/index.php');
  }

  ?>


</div>

<a href="#" class="icon top_sub_menu-toggler">

</a>


<div class="cd-topmenu-modal"> <!-- this is the entire modal form, including the background -->
  <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="display: none;">×</button>

</div>
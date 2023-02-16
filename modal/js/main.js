$(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formLogin = formModal.find('#cd-login'),
		formSignup = formModal.find('#cd-signup'),
		formForgotPassword = formModal.find('#cd-reset-password'),
		formModalTab = $('.cd-switcher a'),
		tabLogin = formModalTab.children('a'),
		tabSignup = formModalTab.children('a'),
		forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
		//mainNavs = $('.header-menu li a.sindesi'); den doulevei gia ta upoloipa sindesi etsi
		mainNavs = $('.sindesi');
		mainNavg = $('.ginemelos');


	var formalClose = $('.close'),			
		mainNav2 = $('.main-nav2');

	var formModal3 = $('.cd-terms-modal'),
		formTerms = formModal3.find('#cd-terms'),
		tabTerms = $('.terms');

	var formModal8 = $('.cd-topmenu-modal'),
		tabtopmenu = $('.top_sub_menu-toggler');	


	mainNavs.on('click', function(event){
		$("body").addClass("modal-open");
		$(event.target).is(mainNavs) && mainNavs.children('ul').toggleClass('is-visible');
		
	});

	mainNavg.on('click', function(event){
		$("body").addClass("modal-open");
		$(event.target).is(mainNavg) && mainNavg.children('ul').toggleClass('is-visible');
		
	});

	
	mainNavs.on('click', function(event){
			login_selected();
	});

	mainNavg.on('click', function(event){
			signup_selected();
	});

	tabtopmenu.on('click', function(event){
		$("body").addClass("modal-open");
		topmenu_selected();
		
	});

	tabTerms.on('click', function(event){
		$("body").addClass("modal-open");
		$(event.target).is(tabTerms) && tabTerms.children('ul').toggleClass('is-visible');		
		event.preventDefault();
		terms_selected();
	});


	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			$("body").removeClass("modal-open");
			formModal.removeClass('is-visible');
			
		}	

	});
	//close modal when clicking the esc keyboard button

    formModal3.on('click', function(event){
		if( $(event.target).is(formModal3) || $(event.target).is('.cd-close-form') ) {
			$("body").removeClass("modal-open");
			formModal3.removeClass('is-visible');
			$("#sp-main-body").removeClass("overall");
			$(".top_sub_menu").removeClass("visible");
			
			
		}	

	});

    formModal8.on('click', function(event){
		if( $(event.target).is(formModal8) || $(event.target).is('.cd-close-form') ) {
			$("body").removeClass("modal-open");
			formModal8.removeClass('is-visible');
			$("#sp-main-body").removeClass("overall");
			$(".top_sub_menu").removeClass("visible");
			
		}	

	});


	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$("body").removeClass("modal-open");
    		formModal.removeClass('is-visible');
    		formModal8.removeClass('is-visible');
	    }
    });




	formalClose.on('click', function(event) {
		console.log("asadasdasdasdasd");
		$("body").removeClass("modal-open");
    	formModal.removeClass('is-visible');
    	formModal3.removeClass('is-visible');    
    	formModal8.removeClass('is-visible');    		
		$("#sp-main-body").removeClass("overall");
	
    	});



	//switch from a tab to another
	formModalTab.on('click', function(event) {
		event.preventDefault();
		if ($(this).parent().parent().hasClass("login_errors") )
			login_selected();
		else
			signup_selected();
	});

	
	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});



	function login_selected(){
		//mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function terms_selected(){
		formModal3.addClass('is-visible');
		$("#sp-main-body").addClass("overall");
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});

	function topmenu_selected(){
		formModal8.addClass('is-visible');
		$('.top_sub_menu').addClass('visible');
	}
	



});


function Clear_Project(){
	window.localStorage.removeItem('json_object');
	console.log('project cleared');
}

function New_Project(){
	Clear_Project();
	window.location.replace("/service.php");
}
function Call_Project_List(){
	Clear_Project();
	$('#main_project_list').submit();
}
function Logout(){
	console.log("Logout");
	Clear_Project();
	window.location.replace("/register/logout.php?logout");
}

function keepMeAlive() {
	/**
 * Heartbeat singleton
 */
var Heart = {
    url:         'http://e-klironomos.gr/', // server script to hit
    logging:     false, // log to console for debugging
    pulse:       300, // heartbeat interval in seconds
    maxTimeouts: 3, // max timeouts before "heart attack" (stop)
    sessionName: 'PHPSESSID', // session cookie name

    // leave these alone
    timeouts:    0,
    timer:       null,
    sessionId:   null,

    //Begin heartbeats
  
    start: function() {
        Heart.getSessionId();
        Heart.timer = setInterval(Heart.beat, Heart.pulse * 1000);
    },

    // Stop heartbeats
    stop: function() {
        clearInterval(Heart.timer);
    },

    // Send single heartbeat
    beat: function() {
        $.ajax({
            url:     Heart.url,
            headers: {
                'X-Heartbeat-Session': Heart.sessionId
            },
            success:  Heart.thump,
            timeout:  Heart.arrhythmia,
            error:    Heart.infarction
        });
    },

    //Successful heartbeat handler
    thump: function() {
        Heart.log('thump thump');
        if (Heart.timeouts > 0)
            Heart.timeouts = 0;
    },

    //Heartbeat timeout handler
    arrhythmia: function() {
        if (++Heart.timeouts >= Heart.maxTimeouts)
            Heart.infarction();
        else
            Heart.log('skipped beat')
                 .beat();
    },

    //Heartbeat failure handler

    infarction: function() {
        Heart.log('CODE BLUE!! GET THE CRASH CART!!')
             .stop();
    },

    //Log to console if Heart.logging == true
    log: function(msg) {
        if (Heart.logging)
            console.log(msg);

        return Heart;
    },

    // Parse cookie string and retrieve PHP session ID
    getSessionId: function() {
        var name    = Heart.sessionName + '=',
            cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];

            while (cookie.charAt(0) == ' ')
                cookie = cookie.substr(1);

            if (cookie.indexOf(name) == 0) {
                Heart.sessionId = cookie.substr(name.length, cookie.length);
                break;
            }
        }
    }
};
console.log("Start the Heart");
// Start the heart!
Heart.start();
}
window.setInterval(keepMeAlive, 300000);
			
			/*$(document).on('click', '.project_litem', function() {
				console.log('#project_dbid_' + $(this).attr('project_dbid'));
				$('#edit_project_form_' + $(this).attr('project_dbid')).submit();
			});
			
			$(document).on('click', '#oldProjBtn2', function() {
				console.log("oldProjBtn2 clicked");
				$('#open_comodal').trigger('click');
			});*/



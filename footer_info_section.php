<section style="width:100%;">
	<div class="container-footer" style="text-align:justify; padding:0px;">
		<footer id="sp-footer">
			<div id="sp-footer1"></div>
		</footer>
	</div>
</section>

<input id="reload_session" class="reload_session" type="hidden" value="0">

<?php
if (true) {
	echo '<script>
	/* 1000 = 1 second*/
	
	setInterval(function(){ 
		/*console.log("session fresh called 1");*/
		$.ajax({
		  url: "/php/reload_session.php",
		  type: "POST",
		  success: function (data) {
			  /*console.log(data);*/
			  $("#reload_session").val(parseInt($("#reload_session").val()) + 1);
		  }
		});
	}, 60000);
	
	/*setInterval(function(){ 
		console.log("session fresh called 2");
		$.ajax({
		  url: "/php/reload_session.php",
		  type: "POST",
		  success: function (data) {
			  console.log(data);
			  $("#reload_session").val(parseInt($("#reload_session").val()) + 1);
		  }
		});
	}, 130000);*/
	
	
	</script>';
}
?>
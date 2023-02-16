var glob_good = 1;
var error_array = [];


function Check_Empty(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);

	if( field.value == ""){
		field.style.backgroundColor = "#ffcccc";
		if ($('#' + text_id).hasClass('date_input')){
			field.style.border = "thick solid #ffcccc";
		}
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.backgroundColor = "#fff";
		if ($('#' + text_id).hasClass('date_input')){
			field.style.border = "1px solid #ccc";
		}
		glob_good = 1;
		callback (1);
	}
	
}

function Check_Empty_Msg(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);


	
	if( field.value == ""){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		//category.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " είναι απαραίτητο";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		message.style.display = "none";

		glob_good = 1;
		callback (1);
	}
	
}



function Check_CheckBox(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	//var category = document.getElementById(tab_name);
	

	//console.log("tab: " + category );
	
	if(!field.checked){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		//category.style.border = "double #d11d1d";
		message.innerHTML = "Πρέπει να συμφωνήσετε με τους Όρους και Προϋποθέσεις";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		//category.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}


function Check_Text(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	if( field.value == ""){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " είναι υποχρεωτικό";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else if(!(/^([a-z]|[α-ω])+$/i.test(field.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " πρέπει να περιέχει μόνο γράμματα";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}



function Check_Number(text_id, error_message,  message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);

	//console.log('field-value = ' + field.value);
	if(!(/[0-9]\d*(?:\.\d{0,2})?/.test(document.forms["profile_form"][text_id].value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		//category.style.border = "double #d11d1d";
		message.innerHTML = "Συμπληρώστε μόνο αριθμούς";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else if(field.value < 0){
		//console.log('something wrong nuuuumbers');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Συμπληρώστε μόνο θετικούς αριθμούς";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		//category.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}


function Number_Not_Req(text_id, error_message,  message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);


	if( (field.value == "-")||(field.value == "") ){
		
		if(field.value == ""){
			field.value = "-";
		}
		field.style.border = "none";
		/*category.style.border = "none";
		message.style.display = "none";*/
		glob_good = 1;
		callback (1);
	}
	else if(!(/^([0-9])+$/.test(field.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		/*category.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " πρέπει να περιέχει μόνο αριθμούς ή '-'";
		message.style.display = "block";*/
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		/*category.style.border = "none";
		message.style.display = "none";*/
		glob_good = 1;
		callback (1);
	}
	
}

function Check_Phone(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	var sel_input = document.forms["profile_form"][text_id];
	
	/*console.log("text_id: " + text_id );
	console.log("error_message: " + error_message );
	console.log("message_name: " + message_name );	
	console.log("Value Length: " + sel_input.value.length );*/

	if( sel_input.value == ""){
		//sel_input.value = "-";
		//console.log('something wrong4');
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if(sel_input.value == "-"){
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if(!(/\(?([0-9]{5})\)?([ . ]?)([0-9]{5})/.test(sel_input.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		
		//console.log( sel_input.value.length );
		message.innerHTML = "Το "+ message_name + " πρέπει να περιέχει μόνο αριθμούς<br>";
		glob_good = 0;
		callback (0);
	}
	else if(sel_input.value.length < 10){
		message.innerHTML = "Το "+ message_name + " πρέπει να έχει 10 νούμερα<br>";
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		callback (0);
		////console.log( (document.forms["profile_form"][text_id]).value.length );
			
	}
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}

function Check_Phone_Req(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	//var sel_input = document.forms["profile_form"][text_id];
	var sel_input = document.getElementById(text_id);
	
	/*console.log("text_id: " + text_id );
	console.log("error_message: " + error_message );
	console.log("message_name: " + message_name );
	
	
	console.log("Value Length: " + sel_input.value.length );*/
	

	if( ( sel_input.value == "")||( sel_input.value == "-") ){
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		message.innerHTML = "Το "+ message_name + " είναι υποχρεωτικό<br>";
		glob_good = 0;
		callback (0);
	}
	else if(sel_input.value.length < 10){
		message.innerHTML = "Το "+ message_name + " πρέπει να έχει 10 νούμερα<br>";
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		callback (0);
			
	}
	else if(!(/\(?([0-9]{5})\)?([ . ]?)([0-9]{5})/.test(sel_input.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		message.innerHTML = "Το "+ message_name + " πρέπει να περιέχει μόνο αριθμούς<br>";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}

function Check_AFM(text_id, error_message,  message_name, callback)
{
		var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	//var sel_input = document.forms["profile_form"][text_id];
	var sel_input = document.getElementById(text_id);
	
	/*console.log("text_id: " + text_id );
	console.log("error_message: " + error_message );
	console.log("message_name: " + message_name );
	
	
	console.log("Value Length: " + sel_input.value.length );*/
	

	if( sel_input.value == ""){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " είναι υποχρεωτικό";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else if(!(/^([0-9])+$/.test(sel_input.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		
		//console.log( sel_input.value.length );
		message.innerHTML = "Το "+ message_name + " πρέπει να περιέχει μόνο αριθμούς<br>";
		glob_good = 0;
		callback (0);
	}
	else if(sel_input.value.length != 9){
		message.innerHTML = "Το "+ message_name + " πρέπει να έχει 9 ενωμένα νούμερα<br>";
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		callback (0);
		//console.log( (document.forms["profile_form"][text_id]).value.length );
			
		}
	else{
		field.style.border = "none";
		message.style.display = "none";
		callback (1);
	}
	
	
}




function Check_Time(text_id, error_message,callback)
{
	var field = document.getElementById(text_id);
	var timel = $('#' + text_id);
	/*console.log('!error message = ' + error_message);
	var message = document.getElementById(error_message);*/
	
	/*var other_time_field = timel.parent().siblings('.clockpicker').find('input');
	var other_time = other_time_field.val();
	var day_time = $('#ttable_startTime' + timel.attr('day')).val();
	var night_time = $('#ttable_endTime' + timel.attr('day')).val();
	
	
	console.log('----------------------------------');
	console.log('day attr = ' + timel.attr('day'));
	console.log('other_time = ' + other_time);
	console.log('day_time = ' + day_time);
	console.log('----------------------------------');*/
	
	//console.log(text_id);
	
	var sel_input = document.forms["profile_form"][text_id];
	var value = $('#' + text_id).val();

	if( value == ""){
		console.log('****something wrong4 in time valid');
		$('#' + text_id).parent().css("border", "5px solid #ffcccc");
		glob_good = 0;
		callback (0);
	}
	else if(value.length != 5){
		console.log('****something wrong5 in time valid');
		$('#' + text_id).parent().css("border", "5px solid #ffcccc");
		//console.log( value.length );
		callback (0);
	}
	else if(!(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]+$/.test(value) )){
		console.log('****something wrong6 in time valid');
		$('#' + text_id).parent().css("border", "5px solid #ffcccc");
		callback (0);
	}
	else{
		//console.log('****all good 7 in time valid');
		$('#' + text_id).parent().css("border", "none");
		//message.style.display = "none";
		callback(1);
		/*if(day_time.length == 5){
			if(timel.hasClass('start_hour')){
			
				if( (value < day_time) || (value > night_time) ){
					console.log("Οι ώρες δε συμφωνούν με το ωράριο");
					message.innerHTML = "Οι ώρες δε συμφωνούν με το ωράριο";
					message.style.display = "block";
					field.style.backgroundColor = "#ffcccc";
					callback(0);
				}
				else if(value > other_time){
					/*console.log("Οι ώρες δε συμφωνούν μεταξύ τους");
					message.innerHTML = "Οι ώρες δε συμφωνούν μεταξύ τους";
					message.style.display = "block";
					field.style.backgroundColor = "#ffcccc";
					other_time_field.style.backgroundColor = "#ffcccc";
					callback(0);*/
			/*	}
				else{
					field.style.backgroundColor = "#fff";
					message.style.display = "none";
					callback(1);
				}
			}
			
			if(timel.hasClass('end_hour')){
			
				if( (value > day_time) || (value < night_time) ){
					console.log("Οι ώρες δε συμφωνούν με το ωράριο");
					message.innerHTML = "Οι ώρες δε συμφωνούν με το ωράριο";
					message.style.display = "block";
					field.style.backgroundColor = "#ffcccc";
					callback(0);
				}
				else if(value < other_time){
					/*console.log("Οι ώρες δε συμφωνούν μεταξύ τους");
					message.innerHTML = "Οι ώρες δε συμφωνούν μεταξύ τους";
					message.style.display = "block";
					field.style.backgroundColor = "#ffcccc";
					other_time_field.style.backgroundColor = "#ffcccc";
					callback(0);*/
			/*	}
				else{
					field.style.backgroundColor = "#fff";
					message.style.display = "none";
					callback(1);
				}
			}
		}
		else{
			field.style.backgroundColor = "#fff";
			message.style.display = "none";
			callback(1);
		}*/

	}
	
}



function Check_Email(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	
	
	
	console.log("Check_Email");
	console.log("text_id: " + text_id );
	console.log("error_message: " + error_message );
	console.log("message_name: " + message_name );
	

	if( field.value == ""){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το "+ message_name + " είναι υποχρεωτικό";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else if( ( text_id.localeCompare("user_email") == 0 ) && (field.value.localeCompare("Κανένα") == 0) ){
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Λάθος μορφή mail";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		//console.log('email good ');
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}

function Check_Website(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	var prefix1 = "http://";
	var prefix2 = "https://";
	
	

	if( field.value == ""){
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if( field.value == "-"){
		field.value = "";
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
		
	}
	
	else if(!(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Λάθος μορφή συνδέσμου";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	/*else if ( (field.value).substr(0, prefix2.length)!= prefix2 ) {
			
		if((field.value).substr(0, prefix1.length) == prefix1){
			message.innerHTML = "Ο σύνδεσμος σαν δεν είναι ασφαλής";
			message.style.display = "block";
			glob_good = 0;
			callback (0);
		}
		else{
			field.value = prefix2 + field.value;
			field.style.border = "none";
			message.style.display = "none";
			glob_good = 1;
			callback (1);
		}

	}*/
	else if ( ((field.value).substr(0, prefix1.length)!= prefix1) && ((field.value).substr(0, prefix2.length)!= prefix2)) {
			

		field.value = prefix1 + field.value;
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}

	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}


function Check_Facebook(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.backgroundColor = "none";
		glob_good = 1;
		callback (1);
	}
	else if(!(/^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.backgroundColor = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}

function Check_Twitter(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
	//else if(!(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(field.value) )){
	else if(!(/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}



function Check_GooglePlus(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
	else if(!(/https?:\/\/plus\.google\.com\/\+[^/]+|\d{21}/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}

function Check_Linkedin(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
	else if(!(/^(https?:\/\/)?(www\.)?linkedin.com\/[a-zA-Z0-9(\.\?)?]/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}


function Check_Youtube(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if(!(/^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.?be)\/.+$/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}


function Check_Instagram(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var prefix = 'https://';

	if( field.value == ""){
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	else if(!(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/.test(field.value) ))
	{
		//console.log('something wrong letters');
		field.style.backgroundColor  = "#ffcccc";
		//message.innerHTML = "Ελέγξτε ξανά τα υπογραμμισμένα url";
		//message.style.display = "block";
		glob_good = 0;1
		callback (0);
	}
	else{
		if ((field.value).substr(0, prefix.length) !== prefix){
			field.value = prefix + field.value;
		}
		field.style.backgroundColor = "#fff";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
}


function Check_Select(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	var prefix = 'https://';
	
	//console.log('');
	//console.log('---------------------------------------------');
	//console.log('function select valid visible');
	//console.log("field value = " + field.value);
	//console.log("field id = " + text_id);

	if( field.value == ""){
		//console.log('something wrong select valid visible 1');
		/*field.style.border = "double #d11d1d";
		message.innerHTML = message_name;
		message.style.display = "block";*/
		field.style.border = "double #d11d1d";
		field.style.backgroundColor = "#ffcccc";
		glob_good = 0;
		callback (0);
	}
	
	else{
		//console.log('all good select valid visible 1');
		/*field.style.border = "none";
		message.style.display = "none";*/
		field.style.border = "none";
		field.style.backgroundColor = "none";
		glob_good = 1;
		callback (1);
	}
	//console.log('---------------------------------------------');
	
}

function Find_Checked(text_id, error_message, message_name, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	var checked_true = false;
	var day_checked = false;
	
	//console.log ('Find_Checked me  = ' + text_id);
	
	
	
	$('#' + text_id).find('.css-checkbox').each(function () {    //loop over each list item
			//console.log("pricesds ID = " + $(($('.price_formm_'+price_count).find('.css-checkbox'), this).attr('id');
			//$(".price_programm_keys", this).append(myYear); //append it to the item information
			iddd =  $(this).attr('id');
			//console.log('Find if checked = ' + iddd);
			if($(this).hasClass('days_check') ){
				day_checked = true;
			}
			if(document.getElementById($(this).attr('id')).checked){
				checked_true = true;
				//console.log('find Checkbox wity id= ' + $(this).attr('id'));
				
			}

		});
		

		
	if(checked_true){
		//console.log('Exei check esto kai ena');
		//field.style.border = "5px inset #cccccc";
		message.style.display = "none";
		glob_good = 1;
		callback (1);

	}
	else{
		//console.log('Den exei check');
		//console.log('something wrong4');
		//field.style.border = "double #d11d1d";
		if(day_checked){
			message.innerHTML = 'Παρακαλούμε προσθέστε ωράριο';
		}
		else{
			message.innerHTML = message_name;
		}
		
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	
}

function Check_Profile_Photo(text_id, error_message, message_name, size_id, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	var size = document.getElementById(size_id);
	
	var default_logo = "https://www.fithouse.gr/images/fithouse_logo.png";
	var src = $('.profile_image_wrapper').find('.cr-image').attr('src');
	var src = String(src);
	
	if (( field.getAttribute('src').indexOf('https://www.fithouse.gr/images/fithouse_logo.png') == 0)&& ( src.localeCompare("undefined") == 0 ) ){
		
		field.style.border = "double #d11d1d";
		message.innerHTML = message_name;
		message.style.display = "block";
		glob_good = 0;
		$('.img_prof_wrapper').addClass("invalid_photo");
		callback (0);
		console.log('profile1');
	}
	/*else if( parseFloat(size.value) > 5){
		
		console.log("Photo Size = " + parseFloat(size.value));
		console.log('something wrong5');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Οι φωτογραφίες δεν πρέπει να ξεπερνούν τα 5 MB";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}*/
	
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		$('.img_prof_wrapper').removeClass("invalid_photo");
		callback (1);
		console.log('profile2');
	}
	
}

function Check_Photo(text_id, error_message, message_name, size, callback)
{
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);

	
	
	/*console.log('---------------------------------------');
	console.log('text_id = ' + text_id);
	console.log('error_message = ' + error_message);
	console.log('message_name = ' + message_name);
	console.log('---------------------------------------');*/
	


	if ( field.getAttribute('src').localeCompare("https://www.fithouse.gr/images/gym_example.jpg") == 0 ){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		message.innerHTML = message_name;
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else if( parseFloat(size) > 18){
		
		console.log("Photo Size = " + parseFloat(size));
		console.log('something wrong5');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Οι φωτογραφίες δεν πρέπει να ξεπερνούν τα 18 MB";
		message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}


function Check_Person_Photo(text_id, error_message, message_name, size_id, callback)
{
	var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var size = document.getElementById(size_id);

	if ( !$('#' + text_id ).hasClass('hidden') && field.getAttribute('src').localeCompare("https://www.fithouse.gr/images/person_example.png") == 0 ){
		//console.log('something wrong4');
		field.style.border = "double #000";
		//message.innerHTML = message_name;
		//message.style.display = "block";
		glob_good = 0;
		callback (0);
	}
	else{
		field.style.border = "none";
		//message.style.display = "none";
		glob_good = 1;
		callback (1);
	}
	
}




/*
function Check_Edit_Form(){
	

	var job_bio = document.getElementById("job_bio");
	var job_first = document.getElementById("job_first");
	var job_last = document.getElementById("job_last");
	var good = 1;

	

	good = Check_Name("job_first", "job_first_message", "Όνομα");
	good = Check_Name("job_last", "job_last_message", "Επώνυμο");
	good = Validate_File("doc", "job_bio", "job_bio_message");

	
	if( job_bio.files.length == 0){
		console.log('something wrong2');
		job_bio.style.border = "double #d11d1d";
		document.getElementById("bio_error_message").style.display = "block";
		good = 0;
	}
	else{
		job_first.style.border = "none";
		document.getElementById("job_first_message").style.display = "none";
	}

	
	if(curr_job_count <= 0){
		console.log('something wrong');
		jobs_select.style.border = "double #d11d1d";
		document.getElementById("position_error_message").style.display = "block";
		good = 0;
	}
	else{
		job_first.style.border = "none";
		document.getElementById("job_first_message").style.display = "none";
	}

	console.log('-----------');
	if(good == 1){
		return false;
	}
	else{
		return false;
	}
	
	return false;
}
*/

 
function Validate_File( target, text_id, error_message, message_name,callback)
{
	//console.log("text_id: " + text_id);
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	var typeArray;
	var file_value = field.value;
	var extension = file_value.substr((~-file_value.lastIndexOf(".") >>> 0) + 2) ;
	var valid = 0 , doc_valid = 0, image_valid = 0;

	console.log("File: " + file_value);
	console.log("Extension: " + extension);
	var files = field.files;
    for (var i = 0; i < files.length; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }
	if(files[0].size > 18000000)
	{
		callback(0);
	}
	if(target.localeCompare("doc")== 0){
		typeArray = ["docx", "pdf", "odt"];
	}
	if(target.localeCompare("image")== 0){
		typeArray = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
	}
	
	if( typeArray.indexOf(extension) > -1)
	{

		for (var i = 0; i < files.length; i++) {
		var blob = files[i]; // See step 1 above
		var fileReader = new FileReader();
			fileReader.onloadend = function(e) {
			  var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
			  var header = "";
			  for(var i = 0; i < arr.length; i++) {
				 header += arr[i].toString(16);
			  }
			  //console.log(header);
			  switch (header) {
				case "89504e47":
					type = "image/png";
					image_valid = 1;
					break;
				case "47494638":
					type = "image/gif";
					break;
				case "ffd8ffe0":
				case "ffd8ffe1":
				case "ffd8ffe2":
					type = "image/jpeg";
					image_valid = 1;
					break;
				case "25504446":
					type = "pdf";
					doc_valid = 1;
					break;
				case "D0CF11E0":
					type = "word";
					doc_valid = 1;
					break;
				case "504b34":
					type = "doc";
					doc_valid = 1;
					break;
				default:
					type = "unknown"; // Or you can use the blob.type as fallback
					break;
			}
			

							
			//console.log("Doc_Valid: " + doc_valid);
			//console.log("Image_valid: " + image_valid);
			
			
			if(target.localeCompare("doc") == 0){
				valid = doc_valid;
			}
			if(target.localeCompare("image") == 0){
				valid = image_valid;
			}
			
				
				
			//console.log("Lats type: " + type);
			//console.log("Is_VAlid: " + valid);
			
			if(valid == 0){
				message.innerHTML = 'Το αρχείο που επιλέξατε δε φαίνεται να έχει σωστή μορφή.';
				field.style.border = "double #d11d1d";
				message.style.display = "block";
				glob_good = 0;
				console.log("Tha epistrepsei 0");
				callback(0);
				
			}
			else{
				message.style.display = "none";
				field.style.border = "none";
				glob_good = 1;
				console.log("Tha epistrepsei 1");
				callback(1);
			}


			  // Check the file signature against known types

			};
			fileReader.readAsArrayBuffer(blob);
		}
	}
	else{
		message.innerHTML = "Παρακαλώ επιλέξτε έναν απο τους παραπάνω τύπους αρχείων:" + message_name;
		field.style.border = "double #d11d1d";
		message.style.display = "block";
		glob_good = 0;
		callback(0);
	}
	callback(1);
	
}



function Validate_File2( target, object, callback)
{
	//console.log("text_id: " + text_id);
	//var field = document.getElementById(text_id);
	//var message = document.getElementById(error_message);
	var typeArray;
	var file_value = object.name;
	var extension = file_value.substr((~-file_value.lastIndexOf(".") >>> 0) + 2) ;
	var valid = 0 , doc_valid = 0, image_valid = 0;

	//console.log("File: " + file_value);
	//console.log("Extension: " + extension);
	var files = object;
    for (var i = 0; i < files.length; i++) {
        //console.log("Filename: " + files[i].name);
        //console.log("Type: " + files[i].type);
        //console.log("Size: " + files[i].size + " bytes");
    }
	if(object.size > 5000000)
	{
		//callback(0);
	}
	if(target.localeCompare("image")== 0){
		typeArray = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];
	}
	
	console.log('typeeearray = ' + typeArray.indexOf(extension));
	if( typeArray.indexOf(extension) > -1)
	{
		console.log('file.length = ' + files.length);
		//for (var i = 0; i < files.length; i++) {
		var blob = files; // See step 1 above
		var fileReader = new FileReader();
			fileReader.onloadend = function(e) {
			  var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
			  var header = "";
			  for(var i = 0; i < arr.length; i++) {
				 header += arr[i].toString(16);
			  }
			  //console.log(header);
			  switch (header) {
				case "89504e47":
					type = "image/png";
					image_valid = 1;
					break;
				case "47494638":
					type = "image/gif";
					break;
				case "ffd8ffe0":
				case "ffd8ffe1":
				case "ffd8ffe2":
					type = "image/jpeg";
					image_valid = 1;
					break;
				case "25504446":
					type = "pdf";
					doc_valid = 1;
					break;
				case "D0CF11E0":
					type = "word";
					doc_valid = 1;
					break;
				case "504b34":
					type = "doc";
					doc_valid = 1;
					break;
				default:
					type = "unknown"; // Or you can use the blob.type as fallback
					break;
			}
			

							
			//console.log("Doc_Valid: " + doc_valid);
			//console.log("Image_valid: " + image_valid);
			
			
			if(target.localeCompare("doc") == 0){
				valid = doc_valid;
			}
			if(target.localeCompare("image") == 0){
				valid = image_valid;
			}
			
				
				
			//console.log("Lats type: " + type);
			//console.log("Is_VAlid: " + valid);
			
			if(valid == 0){
				callback(0);
			}
			else{
				callback(1);
			}


			  // Check the file signature against known types

			};
			fileReader.readAsArrayBuffer(blob);
		//}
	}
	else{
		callback(0);
	}
	
}




function Check_Username(text_id, error_message, message_name, callback){ 
	var field = document.getElementById(text_id);
	var message = document.getElementById(error_message);
	
	if( field.value == ""){
		//console.log('something wrong4');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το Username είναι υποχρεωτικό";
		message.style.display = "block";
		glob_good = 0;
		console.log('username error1');
		callback (0);
		
	}
	else if(!(/^[a-zA-Z0-9\_]+$/.test(field.value) )){
		//console.log('something wrong letters');
		field.style.border = "double #d11d1d";
		message.innerHTML = "Το Username πρέπει να περιέχει μόνο γράμματα και '_')";
		$('#' + error_message).attr('title', "Το Username πρέπει να περιέχει μόνο γράμματα και '_')");
		message.style.display = "block";
		glob_good = 0;
		console.log('username error2');
		callback (0);
	}
	else{
		field.style.border = "none";
		message.style.display = "none";
		glob_good = 1;
		console.log('username good');
		callback (1);
	}
}


function Check_Register_Form(event){
			
			console.log('Check_Register_Form Called');

			var reg_name = document.getElementById("reg_name");
			var reg_email = document.getElementById("reg_email");
			var reg_pass = document.getElementById("reg_pass");

			$("#iframe_loader2").show();
			$("#reg_button").hide();
			
			Check_Empty_Msg("reg_name", "reg_name_message", "Όνομα", function (bool){
			if(bool != 1){ event.preventDefault();$("#iframe_loader2").hide();$("#reg_button").show();return false;}});
			Check_Username("reg_name", "reg_name_message", "Όνομα", function (bool){
			if(bool != 1){ event.preventDefault();$("#iframe_loader2").hide();$("#reg_button").show();return false;}});
			Check_Email("reg_email", "reg_email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault();$("#iframe_loader2").hide();$("#reg_button").show();return false;}});
			Check_Empty_Msg("reg_pass", "reg_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();$("#iframe_loader2").hide();$("#reg_button").show();return false;}});
			/*Check_Empty("confirm_pass", "confirm_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();}});*/

			if(!$('.register_message').hasClass("hidden")){
				$('.register_message').toggleClass('hidden');
			}

			
			return true;
}


function Check_RegPage_Form(event){
			var reg_name = document.getElementById("preg_name");
			var reg_email = document.getElementById("preg_email");
			var reg_pass = document.getElementById("preg_pass");

			$("#piframe_loader2").show();
			$("#preg_button").hide();
			
			Check_Empty_Msg("preg_name", "preg_name_message", "Όνομα", function (bool){
			if(bool != 1){ event.preventDefault();$("#piframe_loader2").hide();$("#preg_button").show();return false;}});
			Check_Email("preg_email", "preg_email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault();$("#piframe_loader2").hide();$("#preg_button").show();return false;}});
			Check_Empty_Msg("preg_pass", "preg_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();$("#piframe_loader2").hide();$("#preg_button").show();return false;}});
			/*Check_Empty("confirm_pass", "confirm_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();}});*/

			if(!$('.register_message').hasClass("hidden")){
				$('.register_message').toggleClass('hidden');
			}

			
			return true;
}




function Check_Order_User(event){ 
	$('.iframe_loader').show();
	$("#members_submit").hide();
	
	Check_Empty_Msg("order_first_name", "first_name_message", "Όνομα", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide(); $("#members_submit").show();}});
	Check_Empty_Msg("order_last_name", "last_name_message", "Επίθετο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide(); $("#members_submit").show();}});
			
	Check_Email("order_email", "email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});

	Check_Phone_Req("order_phone", "phone_message", "Τηλέφωνο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	
	return true;
}



function Check_Login_Form(event){
	
	var login_email = document.getElementById("login_email");
	var login_pass = document.getElementById("login_pass");

	$("#iframe_loader1").show();
	$("#login_button").hide();

	return true;

}







function Check_New_Pass(event)
{
			
	
	var change_email = document.getElementById("change_email");
	var change_pass = document.getElementById("change_pass");
	
	
	Check_Email("change_email", "change_email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault();return false;}});
	Check_Empty_Msg("change_pass", "change_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();return false;}});
	

	
		if(!$('.new_pass_message').hasClass("hidden")){
			$('.new_pass_message').toggleClass('hidden');
		}
		


	return true;
}

function Check_Change_Pass(event)
{
	
	var reg_code = document.getElementById("change2_forgot_code");
	var reg_email = document.getElementById("change2_email");
	var reg_pass = document.getElementById("change2_pass");
	var confirm_pass = document.getElementById("change2_confirm_pass");
	var pass_type = document.getElementById("pass_type");
			
			
	Check_Email("change2_email", "change2_email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault();}});
	Check_Empty_Msg("change2_forgot_code", "change2_forgot_code_message", "πεδίο του προσωρινού Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();}});
	Check_Empty_Msg("change2_pass", "change2_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();}});
	Check_Empty_Msg("change2_confirm_pass", "change2_confirm_pass_message", "πεδίο του Κωδικού", function (bool){
			if(bool != 1){ event.preventDefault();}});
			
	
	if(reg_code.value.localeCompare("") == 0){
		return false;
	}

	else if( reg_pass.value.localeCompare(confirm_pass.value) != 0 ){
		$('.change2_message').html("Οι κωδικοί δεν ταιρίαζουν μεταξύ τους. Παρακαλώ πληκτρολογείστε τον ίδιο κωδικό και στα δύο πεδία");
		$('.change2_message').fadeIn(1000);
		if($('.change2_message').hasClass("hidden"))
		{
			$('.change2_message').toggleClass('hidden');
		}
				
	}
	else{
		
		if(!$('.change2_message').hasClass("hidden")){
			$('.change2_message').toggleClass('hidden');
		}
	}
	$('.iframe_loader').hide();
	$("#save_button").show();
	return true;
}



function Check_Members_Form(event){
	
	$('.iframe_loader').show();
	$("#members_submit").hide();
	
	Check_Empty_Msg("members_name", "members_name_message", "Όνομα της Επιχείρησης", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	Check_Email("members_email", "members_email_message", "Email", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	Check_AFM("members_afm", "members_afm_message", "ΑΦΜ", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	Check_Empty_Msg("members_formal", "members_formal_message", "πεδίο της Επωνυμίας", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	Check_Phone_Req("members_phone", "members_phone_message", "Τηλέφωνο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
	Check_Empty_Msg("members_doy", "members_doy_message", "πεδίο της ΔΟΥ", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#members_submit").show();}});
			
	if(!$('#terms_check').is(":checked")){
		event.preventDefault(); $(".iframe_loader").hide();  
		$("#members_submit").show();
		$('#terms_error').css('display', 'block');
	}
	
	return true;

}


function Check_Order_Invoice(event){
	
	$('.iframe_loader').show();
	$("#invoice_submit").hide();


	Check_AFM("invoice_afm", "invoice_afm_message", "ΑΦΜ", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
	Check_Empty_Msg("invoice_formal", "invoice_formal_message", "πεδίο της Επωνυμίας", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
	Check_Empty_Msg("invoice_doy", "invoice_doy_message", "πεδίο της ΔΟΥ", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
	Check_Empty_Msg("invoice_profession", "invoice_profession_message", "πεδίο της ΔΟΥ", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_profession").show();}});
	Check_Phone_Req("invoice_phone", "invoice_phone_message", "Τηλέφωνο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
			
	Check_Empty_Msg("invoice_address", "invoice_address_message", "πεδίο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
	Check_Empty_Msg("invoice_city", "invoice_city_message", "πεδίο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});	
	Check_Empty_Msg("invoice_region", "invoice_region_message", "πεδίο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});
	Check_Empty_Msg("invoice_postal", "invoice_postal_message", "πεδίο", function (bool){
			if(bool != 1){ event.preventDefault(); $(".iframe_loader").hide();  $("#invoice_submit").show();}});

	$("html, body").animate({scrollTop:$("html, body").offset().top -150},800);
	return true;
}


function Show_Spinners(){
	
	if ( $('#profile_changed').val() == 1 ){
		$('#profile_overlay').show();
	}
	
	 $('.person_changed').each(function () {    //loop over each list item
		if( $(this).val() == 1 ){
			$('#imgl_overlay_' + $(this).attr('number')).show();
		}
	});
}


function Stop_Spinners(){
	
	$('#profile_overlay').hide();

	 $('.person_changed').each(function () {    //loop over each list item
		$('#imgl_overlay_' + $(this).attr('number')).hide();
	});
}

function Error_Actions(event){
	var error = "";
	event.preventDefault();
	$(".iframe_loader").hide();
	$(".pr_loader").hide();
	$("#save_button").show();
	$(".subsaves").show();
	$("#preview_button").show();
	$('#preview_pressed').val('0');
	
	$('#wait_message').hide();
	for (i = 0; i < error_array.length; i++){
		error = error + ', ' + error_array[i];
	}
	
	var error_fixed = error.substring(1);
	
	$("#popmsg_info").trigger('click');
	$("#error_categories").html(error_fixed);
	$("#form_error").show();
	
	Stop_Spinners();
}


function Save_Info( event, tab ){

	var tab_id;
	error_array = [];

	$("#form_error").hide();
	if(!$('#fail_success').hasClass('hidden'))
	{
		$('#fail_success').toggleClass('hidden')
	}
	
	$('#' + tab).find('input[type=text]:enabled').each(function () {
		$(this).css("background-color", "#fff");
	});
	
	$('#' + tab).find('select:enabled').each(function () {
		$(this).css("background-color", "#fff");
	});
	
	
	
	/*if( tab == 'profile_form' ){
		$('#central_menu').find('.prof_dropdown').each(function () {
			$(this).css("background-color", "#fff");
		});
	}
	else{
		$('.' + tab + '_tablet').css("background-color", "#fff");
	}*/
	

	$('#central_menu').find('.prof_dropdown').each(function () {
		$(this).css("background-color", "#fff");
	});

	
	
	$('#' + tab).find('.email_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function (bool){
			if(bool != 1){ 
				$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
				Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
				Error_Actions(event)
			}
		});
	});
	$('#' + tab).find('.empty_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + $(this).closest('.tabcontent').attr('id') );
		Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.number_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Number($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.email_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.empty_checkbox').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_CheckBox($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.website_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Website($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	
	$('#' + tab).find('.time_valid:enabled').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		console.log('time valid tab_id: ' + tab_id );
		Check_Time($(this).attr('id'), $(this).closest('.sport_formm').find('.error_message_sport').attr('id'),  function(bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.select_valid:enabled').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Select($(this).attr('id'), $(this).prev('.error_message').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή",  function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.find_check_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Find_Checked($(this).attr('id'), $(this).find('.error_message_sport').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή ",  function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.photo_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Photo($(this).attr('id'), 'gallery_error',"Πρέπει να προσθέστε μία φωτογραφία ", $(this).attr('psize'), function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	
	
	$('#' + tab).find('.person_photo_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Person_Photo($(this).attr('id'), $(this).prev('.error_message').attr('id'),"Πρέπει να προσθέστε μία φωτογραφία ", $(this).next('.photo_size').attr('id'), function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray('Προσωπικό' , error_array);
			Error_Actions(event);
			}
		});
	});
	
	
	$('#' + tab).find('.facebook_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Facebook($(this).attr('id'), "social_media_message","πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.twitter_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Twitter($(this).attr('id'), "social_media_message","πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.googleplus_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_GooglePlus($(this).attr('id'), "social_media_message" ,"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.linkedin_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Linkedin($(this).attr('id'), "social_media_message" ,"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	
	$('#' + tab).find('.youtube_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Youtube($(this).attr('id'), "social_media_message","πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.instagram_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		 Check_Instagram($(this).attr('id'), "social_media_message","πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	
	/*For may not Visible Items*/
	
	$('#' + tab).find('.email_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	$('#' + tab).find('.empty_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + $(this).closest('.tabcontent').attr('id') );
		Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.number_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Number($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.email_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.empty_checkbox_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_CheckBox($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.website_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('checking kai xroma: ' + tab_id );
		Check_Website($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function (bool){
			if(bool != 1){ 
			$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
			Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
			Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.select_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
		//console.log('select valid checking kai xroma: ' + tab_id );
		 Check_Select($(this).attr('id'), $(this).prev('.error_message').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή",  function (bool){
				if(bool != 1){ 
				$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
				Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
				Error_Actions(event);
			}
		});
	});
	
	$('#' + tab).find('.find_check_valid_visible:not(:hidden)').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
        Find_Checked($(this).attr('id'), $(this).find('.error_message_sport').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή", function(bool){
			if(bool != 1){ 
				$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
				Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
				Error_Actions(event);
			}
		});
	});
	
	
	$('#' + tab).find('.phone_valid').each(function () {
		tab_id = $(this).closest('.tabcontent').attr('id');
        Check_Phone($(this).attr('id'), $(this).prev('.error_message').attr('id'),"τηλέφωνο", function(bool){
			if(bool != 1){ 
				$('.' + tab_id + '_tablet').css("background-color", "#ffcccc");
				Add_InArray($('.' + tab_id + '_tablet').find('span').first().text() , error_array);
				Error_Actions(event);
			}
		});
	});
	
	/********* More Special Cases **************/
	
	if( tab == 'profile_form' || tab == 'gym_infos_tab'){
		Check_Profile_Photo('profile_img', 'profile_photo_message',"Πρέπει να προσθέστε μία φωτογραφία ", $(this).next('.photo_size').attr('id'), function (bool){
			//tab_id = $(this).closest('.tabcontent').attr('id');
			if(bool != 1){ 
				$('.gym_infos_tab_tablet').css("background-color", "#ffcccc");
				Add_InArray('Στοιχεία' , error_array);
				Error_Actions(event);
			}
		});
	}
	
	/*Check Phones*/
	if( tab == 'profile_form' || tab == 'gym_contact_tab'){
		var gym_phone = document.getElementById('gym_phone');
		var gym_mobile = document.getElementById('gym_mobile');
		var gym_contact_tab_tablet = document.getElementById('gym_contact_tab_tablet');
		if( ( (gym_phone.value == "-") && (gym_mobile.value == "-") ) ){

			gym_phone.style.border = "double #d11d1d";
			gym_phone_message.innerHTML = "Πρέπει να συμπληρώσετε ένα απο τα δύο τηλέφωνα";
			gym_phone_message.style.display = "block";
			
			$('.gym_contact_tab_tablet').css("background-color", "#ffcccc");
			Add_InArray('Επικοινωνία' , error_array);
			Error_Actions(event)
		}
		else if( ( (gym_phone.value == "") && (gym_mobile.value == "") ) ){
			gym_phone.style.border = "double #d11d1d";
			gym_phone_message.innerHTML = "Πρέπει να συμπληρώσετε ένα απο τα δύο τηλέφωνα";
			gym_phone_message.style.display = "block";
			
			$('.gym_contact_tab_tablet').css("background-color", "#ffcccc");
			Add_InArray('Επικοινωνία' , error_array);
			Error_Actions(event)
		}
	}
	
	if( tab == 'profile_form' || tab == 'gallery_tab' || tab == 'personel_tab'){
		$('#paypacket_warning').hide();
	}
	
	
	/*Check Gallery Count*/
	if( tab == 'profile_form' || tab == 'gallery_tab'){
		var curr_gallery_count = document.getElementById("curr_gallery_count").value;
		var curr_person_count = document.getElementById("curr_person_count").value;
		//var curr_sports_count = document.getElementById("curr_sports_count").value;
		var mcurr_sports_count = document.getElementById("curr_mprogramm_count").value;
		var curr_price_count = document.getElementById("curr_price_count").value;
		
		if(curr_gallery_count < 1 ){
			$('.gallery_tab_tablet').css("background-color", "#ffcccc");
			document.getElementById("gallery_add_message").innerHTML = "Ανεβάστε τουλάχιστον μία φωτογραφία";
			document.getElementById("gallery_add_message").style.display = "block";
			Add_InArray('Άλμπουμ' , error_array);
			Error_Actions(event)
		}
		else{
			document.getElementById("gallery_add_message").style.display = "none";
		}
		
		console.log("max_gallnum = " + max_gallnum);
		if($('#curr_gallery_count').val() > max_gallnum){
			var errg = document.getElementById('gallery_error');
			errg.innerHTML = "To Άλμπουμ δε μπορει να ξεπερνάει τις " + max_gallnum + " φωτογραφίες";
			errg.style.display = "block";
			$('.gallery_tab_tablet').css("background-color", "#ffcccc");
			console.log("Too much photosssss");
			$('#packet_limit').html('τόσες φωτογραφίες άλμπουμ');
			$('#paypacket_warning').show();
			Add_InArray('Άλμπουμ' , error_array);
			Error_Actions(event);
		}
		
		
	}
	console.log("max_personnum = " + max_personnum);
	if(tab == 'personel_tab'){
		
		if($('#curr_person_count').val() < 1 ){
			$('.personel_tab_tablet').css("background-color", "#ffcccc");
			document.getElementById("personel_add_message").innerHTML = "Ανεβάστε τουλάχιστον έναν προπονητή";
			document.getElementById("personel_add_message").style.display = "block";
			Add_InArray('Προσωπικό' , error_array);
			Error_Actions(event)
		}
		else{
			document.getElementById("personel_add_message").style.display = "none";
		}
		
		if($('#curr_person_count').val() > max_personnum){
			/*var errg = document.getElementById('gallery_error');
			errg.innerHTML = "To Άλμπουμ δε μπορει να ξεπερνάει τις " + gallnum + " φωτογραφίες";
			errg.style.display = "block";
			$('.gallery_tab_tablet').css("background-color", "#ffcccc");*/
			$('#packet_limit').html('τέτοιο αριθμό εργαζομένων');
			$('#paypacket_warning').show();
			Add_InArray('Προσωπικό' , error_array);
			Error_Actions(event);
		}

	}
	
	
	/*Check if event programms are empty*/
	if( tab == 'profile_form' || tab == 'event_output'){
		$('#event_output').find('.eventdiv_list:not(:hidden)').each(function () {
			if( ($(this).find('.event_schedule_type').val()).localeCompare('event_schedule_show') == 0){
				var message = document.getElementById($(this).find('.error_title').attr('id'));
				if($(this).find('.curr_mprogramms_event').val() < 1 ){
					message.innerHTML = "Πρέπει να προσθέσετε ενα πρόγραμμα";
					message.style.display = "block";
					Add_InArray('Εκδηλώσεις' , error_array);
					Error_Actions(event);
				}
				/*else if($(this).find('.curr_inner_ev_sports').val() < 1 ){
					message.innerHTML = "Πρέπει να προσθέσετε ενα πρόγραμμα";
					message.style.display = "block";
					Add_InArray('Εκδηλώσεις' , error_array);
					Error_Actions(event);
				}*/
				else{
					message.style.display = "none";
				}
				
			}
		});
	}
	
	
	if( tab == 'profile_form' || tab == 'schedule_tab'){
		if( (mcurr_sports_count < 1 ) || ($('#main_gym_schedule').find('.sports_listed_programms').length == 0) ){
			$('.schedule_tab_tablet').css("background-color", "#ffcccc");
			document.getElementById("sports_add_message").innerHTML = "Πρέπει να δημουργήσεις ένα πρόγραμμα";
			document.getElementById("sports_add_message").style.display = "block";
			Add_InArray('Πρόγραμμα' , error_array);
			Error_Actions(event)
		}
		else{
			document.getElementById("sports_add_message").style.display = "none";
		}
		if(curr_price_count < 1 ){
			$('.price_tab_tablet').css("background-color", "#ffcccc");
			document.getElementById("price_add_message").innerHTML = "Πρέπει να δημουργήσεις ένα πακέτο τιμής";
			document.getElementById("price_add_message").style.display = "block";
			Add_InArray('Τιμοκατάλογος' , error_array);
			Error_Actions(event)
		}
		else{
			document.getElementById("price_add_message").style.display = "none";
		}
		
		var programms_number = Check_Programm_Number(this, false);
		
		if( programms_number > max_programms){
			$('.schedule_tab_tablet').css("background-color", "#ffcccc");
			document.getElementById("sports_add_message").innerHTML = "Το πακέτο σου επιτρέπει μέχρι " + max_programms + " προγράμματα. <span onClick='Renew_Trial()' style='cursor:pointer;color:#0066cc;' class='renew_trial'>Αναβάθμισε</span> το πακέτο σου για περισσότερες δυνατότητες";
			document.getElementById("sports_add_message").style.display = "block";
			Add_InArray('Πρόγραμμα' , error_array);
			Error_Actions(event);
		}
		
		
		
		/**insert check here**/
		console.log('insert check here');
		$('#schedule_tab').find('.time_valid:enabled').each(function () {
			var day_count = $('#ptable_count_' + $(this).attr('sarea') ).val();
			var sarea = $(this).attr('sarea');
			var start_time, end_time, error_message;
			console.log(' ');
			console.log('---------------');
			console.log('Searea = ' + sarea);
			console.log('ID = ' + $(this).attr('id'));
			console.log('Day_count = ' + day_count);
			
			for(var i=0; i< day_count; i++){
				start_time = $('#sports_startTime_'+ sarea +'_c' + i).val();
				end_time = $('#sports_endTime_'+ sarea +'_c' + i).val();
				console.log('First start_time  = ' + start_time);
				console.log('First end_time  = ' + end_time);
				
				$('.sprogramm_parent_' + sarea).find('.sports_Time_'+ sarea +':enabled').each(function () {
					console.log('Found = ' + $(this).attr('id') + ' with val = ' + $(this).val());
					console.log("(this).hasClass('start_hour') = " + $(this).hasClass('start_hour'));
					console.log("((this).attr('scount') = " + $(this).attr('scount'));
					
					if( $(this).hasClass('start_hour')&&( ($(this).val()).localeCompare(start_time) == 0 ) && ($(this).attr('scount') != i) ){
						console.log('Found start_time  = ' + $(this).val());
						console.log('Found end_time  = ' + $('#sports_endTime_' + sarea +'_c' + $(this).attr('scount')).val());
						if ($('#sports_endTime_' + sarea +'_c' + $(this).attr('scount')).val().localeCompare(end_time) == 0 ){
							console.log("% vrika idia sto = " + sarea);
							console.log('.sports_Time_' + sarea);
							error_message = $(this).closest('.programm_formm').find('.error_message_sport');
							error_message.html('Έχετε βάλει πανομοιότυπες ώρες σε ίδια μέρα');
							error_message.css("display", "block");
							$('.sports_Time_' + sarea).parent().css("border", "5px solid #ffcccc");
							Add_InArray('Πρόγραμμα' , error_array);
							Error_Actions(event);
						}
					}
				});
			}
			console.log('---------------');
			console.log(' ');
			console.log(' ');
		});
		
	}
	
	
	/* Rewhite tabs*/
	var error_log_msg = "";
	if( tab == 'profile_form' ){
		$(document).find('.prof_dropdown').each(function () {
			if( $(this).css('background-color').localeCompare ( 'rgb(255, 255, 255)') != 0){
				error_log_msg = error_log_msg + " , " + $(this).children('span').html();
			}
		});
	}
	else{
		/*if( $('.' + tab + '_tablet').css('background-color').localeCompare ( 'rgb(255, 255, 255)') != 0){
			error_log_msg = error_log_msg + " , " + $('.' + tab + '_tablet').children('span').html();
		}*/
	}
	
	return true;
	
	
}




function Check_Business_Profile(event){
			
	//Save_Info(event, 'gym_contact_tab');

	/*if(curr_person_count < 1 ){
		$('.personel_tab_tablet').css("background-color", "#ffcccc");
		document.getElementById("personel_add_message").innerHTML = "Πρέπει να δημιουργήσετε τουλάχιστον ένα προφίλ εργαζομένου";
		document.getElementById("personel_add_message").style.display = "block";
		event.preventDefault();
		$(".iframe_loader").hide();
		$("#save_button").show();
		$("#form_error").show();
		$('#wait_message').hide();
	}
	else{
		document.getElementById("personel_add_message").style.display = "none";
	}*/
	
	console.log( "Main Gym Schedule"  + $('#main_gym_schedule').find('.sports_listed_programms').length );


	/* Check size*/
	/*if(document.getElementById("occupied").value > 40) {
		document.getElementById('size_warning').innerHTML = "Έχετε ξεπεράσει το διαθέσιμο χώρο.";
		document.getElementById('size_warning').style.display = "block";
		event.preventDefault();
		$(".iframe_loader").hide();
		$("#save_button").show();
		$("#form_error").show();
		$('#wait_message').hide();
	}
	else{
		document.getElementById("size_warning").style.display = "none";
	}*/
	
	

	


	//return true;
}





function on_Upload_Button(iframe_loader, submit_button){
	$(iframe_loader).show();
	$(submit_button).hide();
	 progress_bar();
	
}




$(document).on('blur','.text_valid',function(){
        //Check_Text($(this).attr('id'), $(this).prev('.error_message').attr('id'),$(this).closest('.tabcontent').attr('id'),"πεδίο αυτό" );
        Check_Text($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('blur','.number_valid',function(){
        Check_Number($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){});
});

$(document).on('blur','.phone_valid',function(){
        Check_Phone($(this).attr('id'), $(this).prev('.error_message').attr('id'),"τηλέφωνο", function(){} );
});

$(document).on('blur','.afm_valid',function(){
        Check_AFM($(this).attr('id'), $(this).prev('.error_message').attr('id'),"ΑΦΜ", function(){} );
});

$(document).on('blur','.time_valid',function(){
        Check_Time($(this).attr('id'), $(this).closest('.sport_formm').find('.error_message_sport').attr('id'), function(){} );
});

$(document).on('blur','.email_valid',function(){
        Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function(){} );
});

$(document).on('focusout','.empty_valid',function(){
        Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('change','.empty_valid',function(){
        Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('change','.empty_msg_valid',function(){
        Check_Empty_Msg($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});


/*$(document).on('blur','.empty_checkbox',function(){
        Check_CheckBox($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});*/

$(document).on('blur','.website_valid',function(){
        Check_Website($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('blur','.facebook_valid',function(){
		Check_Facebook($(this).attr('id'), "social_media_message","πεδίο αυτό", function (){});
});

$(document).on('blur','.twitter_valid',function(){
		Check_Twitter($(this).attr('id'), "social_media_message","πεδίο αυτό", function (){});
});

$(document).on('blur','.youtube_valid',function(){
		Check_Youtube($(this).attr('id'), "social_media_message","πεδίο αυτό", function (){});
});

$(document).on('blur','.instagram_valid',function(){
		Check_Instagram($(this).attr('id'), "social_media_message","πεδίο αυτό", function (){});
});

$(document).on('blur','.linkedin_valid',function(){
		Check_Linkedin($(this).attr('id'), "social_media_message","πεδίο αυτό", function (){});
});


/*$(document).on('blur','.select_valid',function(){
        Check_Select($(this).attr('id'), $(this).prev('.error_message').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή", function(){} );
});*/

/*$(document).on('blur','.find_check_valid',function(){
        Find_Checked($(this).attr('id'), $(this).find('.error_message_sport').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή ", function(){} );
});*/




/*For may not visible elements*/



$(document).on('blur','.text_valid_visible',function(){
        //Check_Text($(this).attr('id'), $(this).prev('.error_message').attr('id'),$(this).closest('.tabcontent').attr('id'),"πεδίο αυτό" );
        Check_Text($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('blur','.number_valid_visible',function(){
        Check_Number($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){});
});

$(document).on('blur','.phone_valid_visible',function(){
        Check_Phone($(this).attr('id'), $(this).prev('.error_message').attr('id'),"τηλέφωνο", function(){} );
});

$(document).on('blur','.afm_valid_visible',function(){
        Check_AFM($(this).attr('id'), $(this).prev('.error_message').attr('id'),"ΑΦΜ", function(){} );
});

$(document).on('blur','.email_valid_visible',function(){
        Check_Email($(this).attr('id'), $(this).prev('.error_message').attr('id'), "Email", function(){} );
});

/*
$(document).on('focusout','.empty_valid_visible',function(){
        Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('change','.empty_valid_visible',function(){
        Check_Empty($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});

$(document).on('blur','.empty_checkbox_visible',function(){
        Check_CheckBox($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});*/

$(document).on('blur','.website_valid_visible',function(){
        Check_Website($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){} );
});




/*

$(document).on('blur','.select_valid_visible',function(){
        Check_Select($(this).attr('id'), $(this).prev('.error_message').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή", function(){} );
});

$(document).on('blur','.find_check_valid_visible',function(){
        Find_Checked($(this).attr('id'), $(this).find('.error_message_sport').attr('id'),"Πρέπει να κάνετε τουλάχιστον μία επιλογή ", function(){} );
});
*/


/*For may not reqiures elements*/




$(document).on('blur','.number_not_req',function(){
        Number_Not_Req($(this).attr('id'), $(this).prev('.error_message').attr('id'),"πεδίο αυτό", function(){});
});



/*
$(document).on('blur','.photo_valid',function(){
        Check_Photo($(this).find('.thumb').attr('id'), $(this).find('.error_message').attr('id'),"Πρέπει να προσθέστε μία φωτογραφία ", function(){} );
});*/



/***** CHANGE LISTENERS****/
/*$(document).on('change','.info_changed',function(){ $('#info_changed_input').val(',Πληροφορίες Επιχείρησης'); $('#change_listing').val( $('#change_listing').val() + ', ' + $(this).parent().text().replace(/\s\s+/g, ' '));});
$(document).on('change','.map_changed',function(){ $('#map_changed_input').val(',Χάρτης'); $('#change_listing').val( $('#change_listing').val() + ', ' + $(this).parent().text().replace(/\s\s+/g, ' '));});
$(document).on('change','.contact_changed',function(){ $('#contact_changed_input').val(',Επικοινωνία Επιχείρησης'); $('#change_listing').val( $('#change_listing').val() + ', ' + $(this).parent().text().replace(/\s\s+/g, ' '));});
$(document).on('change','.gallery_changed',function(){ $('#gallery_changed_input').val(',Gallery'); });
$(document).on('change','.personnel_changed',function(){ $('#personnel_changed_input').val(',Προσωπικό'); });
//$(document).on('change','.programm_changed',function(){ $('#programm_changed_input').val(',Πρόγραμμα'); });
$(document).on('change','.price_changed',function(){ $('#price_changed_input').val(',Τιμοκατάλογος'); });
$(document).on('change','.event_changed',function(){ $('#event_changed_input').val(',Events'); });
$(document).on('change','.offer_changed',function(){ $('#offer_changed_input').val(',Offers'); });
$(document).on('change','.anoun_changed',function(){ $('#anoun_changed_input').val(',Ανακοινώσεις'); });*/





$(document).on('change','.map_changed',function(){ 
	$('#map_changed_input').val(',Χάρτης'); 
	$('#pre_map_changed_input').val(',Χάρτης'); 
	//$('#change_listing').val( $('#change_listing').val() + ', ' + $(this).parent().text().replace(/\s\s+/g, ' '));
	$('#change_listing').val( $('#change_listing').val() + ', ' + 'Αλλαγή Χάρτη');
});











/* Programms Change Listener*/


function Change_Inputs(elem, closest, section, output, prefix, texting, checkb){
	//console.log(section + ' Table Changed');
	//console.log('idwq:  ' + closest.attr('id'));
	var nid = closest.find('.packet_id').val();
	//console.log("Packet ID: " + nid);
	if(nid != -1){
		if(!checkb){
			//console.log("Not Checkbox: " + nid);
			Add_Notification( elem, nid, section, output );
		}
		else{
			//console.log("Checkbox: " + nid);
			if( elem.is(':checked') ){
				Add_Notification_2( elem, nid , "Added " + section, output );
			}
			else{
				Add_Notification_2( elem, nid , "Removed "  + section, output );
			}
		}
	}
	$('#' + prefix +'_changed_' + nid).val('1');
	$('#pre_' + prefix +'_changed_' + nid).val('1');
	$('#' + prefix +'_changed_input').val(',' + texting);
	$('#pre_' + prefix +'_changed_input').val(',' + texting);
}



$('#main_gym_schedule').on('change','select',function(){ 
	console.log('Programm Changed');
	//var nid = $(this).attr('packet_id');
	//Add_Notification( $(this), nid, "Programm", "main_gym_schedule" );
	Change_Inputs($(this), $(this).closest('.programm_formm'), "Programm", "main_gym_schedule", "programm", "Πρόγραμμα", false);
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	$(this).closest('.mprogramm').find('.programm_changed').val('1');
	if($(this).closest('.mprogramm').find('.mprogramm_pstate').val().localeCompare('Active') == 0 ){
		$(this).closest('.mprogramm').find('.mprogramm_pstate').val('Pendactive');
		$(this).closest('.mprogramm').find('.programm_pstate').val('Pendactive');
	}
	Changed_Button_Status('save_programm', 'Προγράμματος');
	//$('#programm_changed_input').val(',Πρόγραμμα');
	//$('#pre_programm_changed_input').val(',Πρόγραμμα');
	$('#enabled_keys_tab').addClass('hiddennn');
	$('#disabled_keys_tab').removeClass('hiddennn');
});

/*$('#main_gym_schedule').on('keyup','input',function(){ 
	console.log('Programm Changed Inputzzz'); 
	Change_Inputs($(this), $(this).closest('.programm_formm'), "Programm Day", "main_gym_schedule", "programm", "Πρόγραμμα", true);
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	Changed_Button_Status('save_programm', 'Προγράμματος');
	/*$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');*/
/*});*/

$('#main_gym_schedule').on('change input','input',function(){ 
	console.log('Programm Changed Inputzzz'); 
	Change_Inputs($(this), $(this).closest('.programm_formm'), "Programm Day", "main_gym_schedule", "programm", "Πρόγραμμα", true);
	$(this).closest('.mprogramm').find('.programm_changed').val('1');
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	if($(this).closest('.mprogramm').find('.mprogramm_pstate').val().localeCompare('Active') == 0 ){
		$(this).closest('.mprogramm').find('.mprogramm_pstate').val('Pendactive');
		$(this).closest('.mprogramm').find('.programm_pstate').val('Pendactive');
	}
	Changed_Button_Status('save_programm', 'Προγράμματος');
	/*$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');*/
});

$('#main_gym_schedule').on('change','.clockpicker',function(){ 
	console.log('Programm Changed Time'); 
	Change_Inputs($(this).find('.time_valid'), $(this).closest('.programm_formm'), "Programm Time", "main_gym_schedule", "programm", "Πρόγραμμα", false);
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	$(this).closest('.mprogramm').find('.programm_changed').val('1');
	if($(this).closest('.mprogramm').find('.mprogramm_pstate').val().localeCompare('Active') == 0 ){
		$(this).closest('.mprogramm').find('.mprogramm_pstate').val('Pendactive');
		$(this).closest('.mprogramm').find('.programm_pstate').val('Pendactive');
	}
	Changed_Button_Status('save_programm', 'Προγράμματος');
	/*$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');*/
});



$('#main_gym_schedule').on('click','#x2',function(){ 
	console.log('Programm Changed'); 
	Add_Notification_2( $(this), $(this).attr('packid') , "Programm", "main_gym_schedule" );
	$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');
	Changed_Button_Status('save_programm', 'Προγράμματος');
});

$('#main_gym_schedule').on('click','#x',function(){ 
	console.log('Main Programm Removed'); 
	Add_Notification_2( $(this), $(this).attr('packid') , "Programm", "main_gym_schedule" );
	$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');
	Changed_Button_Status('save_programm', 'Προγράμματος');
});


/* Info Change Listener*/
$('#gym_infos').on('change','select',function(){ 
	console.log('Info Changed');
	Add_Notification_2( $(this), 0 , "Infos", "gym_infos" );
	$('#info_changed_input').val(',Στοιχεία');
	$('#pre_info_changed_input').val(',Στοιχεία');
	Changed_Button_Status('save_info', 'Στοιχείων');
});

$('#gym_infos').on('change input','input',function(){ 
	console.log('Info Changed'); 
	Add_Notification_2( $(this), 0 , "Infos", "gym_infos" );
	$('#info_changed_input').val(',Στοιχεία');
	$('#pre_info_changed_input').val(',Στοιχεία');
	Changed_Button_Status('save_info', 'Στοιχείων');
});


$('#gym_infos').on('change input','input',function(){ 
	Changed_Button_Status('save_info', 'Στοιχείων');
});
$('#gym_infos').on('change input','textarea',function(){ 
	Changed_Button_Status('save_info', 'Στοιχείων');
});

$('#map_in_prof').on('change input','input',function(){ 
	console.log('Info Changed'); 
	Add_Notification_2( $(this), 0 , "Infos", "gym_infos" );
	$('#info_changed_input').val(',Στοιχεία');
	$('#pre_info_changed_input').val(',Στοιχεία');
	Changed_Button_Status('save_info', 'Στοιχείων');
});


/* Timetable Change Listener*/
$('#gym_timetable').on('change','select',function(){ 
	console.log('Timetable Changed');
	Add_Notification_2( $(this), $(this).attr('id'), "Timetable", "gym_timetable" );
	$('#timetable_changed_input').val(',Ωράριο');
	$('#pre_timetable_changed_input').val(',Ωράριο');
	Changed_Button_Status('save_info', 'Στοιχείων');
});

$('#gym_timetable').on('change input','input',function(){ 
	console.log('Timetable Changed'); 
	if( $(this).is(':checked') ){
		Add_Notification_2( $(this), 0 , "Added Day Timetable", "gym_timetable" );
	}
	else{
		Add_Notification_2( $(this), 0 , "Removed Day Timetable", "gym_timetable" );
	}	
	$('#timetable_changed_input').val(',Ωράριο');
	$('#pre_timetable_changed_input').val(',Ωράριο');
	Changed_Button_Status('save_info', 'Στοιχείων');
});

$('#gym_timetable').on('change','.clockpicker',function(){ 
	console.log('Programm Changed Input'); 
	Add_Notification_2( $(this).find('.time_valid'), 0 , "Timetable Time", "gym_timetable" );
	$('#timetable_changed_input').val(',Ωράριο');
	$('#pre_timetable_changed_input').val(',Ωράριο');
	Changed_Button_Status('save_info', 'Στοιχείων');
});

$('#gym_timetable').on('click','.tt_delete_button',function(){ 
	console.log('Programm Changed Input tt_delete_button'); 
	Add_Notification_2( $(this), 0 , "Timetable Time", "gym_timetable" );
	$('#timetable_changed_input').val(',Ωράριο');
	$('#pre_timetable_changed_input').val(',Ωράριο');
	Changed_Button_Status('save_info', 'Στοιχείων');
});


/* Contact Change Listener*/
$('#gym_contact_tab').on('change','select',function(){ 
	console.log('Contact Changed');
	$('#contact_changed_input').val(',Επικοινωνία Επιχείρησης');
	$('#pre_contact_changed_input').val(',Επικοινωνία Επιχείρησης');
	Changed_Button_Status('save_contact', 'Επικοινωνίας');
});

$('#gym_contact_tab').on('change input','input',function(){ 
	console.log('Contact Changed'); 
	Add_Notification_2( $(this), 0,  "Contact", "gym_contact" );
	$('#contact_changed_input').val(',Επικοινωνία Επιχείρησης');
	$('#pre_contact_changed_input').val(',Επικοινωνία Επιχείρησης');
	Changed_Button_Status('save_contact', 'Επικοινωνίας');
});

$('#gym_contact_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_contact', 'Επικοινωνίας');
});
$('#gym_contact_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_contact', 'Επικοινωνίας');
});


/* Facilities Listener*/

$('#gym_facilities').on('change','input',function(){ 
	console.log('Facilities Changed');
	$('#fac_changed_input').val(',Εγκαταστάσεις');
	$('#pre_fac_changed_input').val(',Εγκαταστάσεις');

	if( $(this).is(':checked') ){
		Add_Notification_Extras( $(this), 'Added Facility', 'gym_facilities', 'Facilities');
	}
	else{
		Add_Notification_Extras( $(this), 'Removed Facility', 'gym_facilities', 'Facilities');
	}
	Changed_Button_Status('save_more', 'Εκαταστάσεων/Υπηρεσιών');
	$('#enabled_keys_tab').addClass('hiddennn');
	$('#disabled_keys_tab').removeClass('hiddennn');
	
});

$('#gym_services').on('change','input',function(){ 
	console.log('Services Changed');
	$('#serv_changed_input').val(',Υπηρεσίες');
	$('#pre_serv_changed_input').val(',Υπηρεσίες');
	
	if( $(this).is(':checked') ){
		Add_Notification_Extras( $(this), 'Added Service', 'gym_services', 'Facilities');
	}
	else{
		Add_Notification_Extras( $(this), 'Removed Service', 'gym_services', 'Facilities');
	}
	Changed_Button_Status('save_more', 'Εκαταστάσεων/Υπηρεσιών');
	$('#enabled_keys_tab').addClass('hiddennn');
	$('#disabled_keys_tab').removeClass('hiddennn');
	
});


/* Services Listener*/
$('#gallery_tab').on('change','input',function(){ 
	console.log('Gallery Changed'); 
	$('#gallery_changed_input').val(',Άλμπουμ');
	$('#pre_gallery_changed_input').val(',Άλμπουμ');
	Changed_Button_Status('save_gallery', 'Άλμπουμ');
});

$('#gallery_tab').on('click','.minus_icon_second',function(){ 
	console.log('Gallery Changed'); 
	$('#gallery_changed_input').val(',Άλμπουμ');
	$('#pre_gallery_changed_input').val(',Άλμπουμ');
	Changed_Button_Status('save_gallery', 'Άλμπουμ');
});




/* Personnel Listener*/
$('#personel_tab').on('change','input',function(){ 
	Change_Inputs($(this), $(this).closest('.person_formm'), "Personnel", "person_preview", "personnel", "Προσωπικό", false);
	$(this).closest('.person_formm').find('.change_class').val('1');
	//$('#personnel_changed_input').val(',Personnel');
	$('#pre_personnel_changed_input').val(',Personnel');
	Changed_Button_Status('save_personnel', 'Προσωπικού');
});

$('#personel_tab').on('click','.minus_icon_second',function(){ 
	console.log('Personnel Changed'); 
	$('#personnel_changed_input').val(',Personnel');
	$('#pre_personnel_changed_input').val(',Personnel');
	Changed_Button_Status('save_personnel', 'Προσωπικού');
	
});

$('#personel_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_personnel', 'Προσωπικού');
});
$('#personel_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_personnel', 'Προσωπικού');
});



/* Pricetable Change Listener*/
$('#price_tab').on('change','select',function(){ 
console.log('Price Select Changed');
	Change_Inputs($(this), $(this).closest('.price_formm'), "Prices", "price_schedule", "price", "Τιμοκατάλογος", false);
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});

$('#price_tab').on('change input','input',function(){ 
	if(!$(this).is(':checkbox')){
		Change_Inputs($(this), $(this).closest('.price_formm'), "Prices " + $(this).attr('ctype'), "price_schedule", "price", "Τιμοκατάλογος", false);
	}
	else{
		Change_Inputs($(this), $(this).closest('.price_formm'), "Prices " + $(this).attr('ctype'), "price_schedule", "price", "Τιμοκατάλογος", true);
	}
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});

$('#price_tab').on('change','textarea',function(){ 
	console.log('Price Removed'); 
	Change_Inputs($(this), $(this).closest('.price_formm'), "Prices Desc", "price_schedule", "price", "Τιμοκατάλογος", false);
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});


$('#price_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});
$('#price_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});


$('#price_tab').on('click','.minus_icon_second',function(){ 
	console.log('Price packet deleted'); 
	Add_Notification_2( $(this), $(this).attr('prev') , "Prices", "price_schedule" );
	$('#price_changed_input').val(',Prices');
	$('#pre_price_changed_input').val(',Prices');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});


$('#price_tab').on('click','.check_check',function(){ 
	console.log('Price packet basic update'); 
	$('#price_changed_input').val(', Prices Basic');
	$('#pre_price_changed_input').val(',Prices Basic');
	Changed_Button_Status('save_price', 'Τιμοκαταλόγου');
});


/* Event-Seminar Change Listener*/
$('#event_tab').on('change','.main_select',function(){ 
	Change_Inputs($(this), $(this).closest('.event_formm'), "Events", "event_output", "event", "Events", false);
	console.log('Events/Seminar Changed');
	Changed_Button_Status('save_event', 'Events');
	/*$('#event_changed_input').val(',Events');
	$('#pre_event_changed_input').val(',Events');*/
});

$('#event_tab').on('change input','input',function(){ 
	if(!$(this).hasClass('css-checkbox')){
		Change_Inputs($(this), $(this).closest('.event_formm'), "Events", "event_output", "event", "Events", false);
	}
	else{
		Change_Inputs($(this), $(this).closest('.event_formm'), "Events", "event_output", "event", "Events", true);
	}
	Changed_Button_Status('save_event', 'Events');
});

$('#event_tab').on('change','textarea',function(){ 
	Change_Inputs($(this), $(this).closest('.eventdiv_list'), "Events", "event_output", "event", "Events", false);
	Changed_Button_Status('save_event', 'Events');
});

$('#event_tab').on('click','.minus_icon_second2',function(){ 
	//Change_Inputs($(this), $(this).closest('.eventdiv_list'), "Event Desc", "event_output", "event", "Events", false);
	console.log('Delete event clicked with prev = ' + $(this).attr('prev'));
	Add_Notification_2( $(this), $(this).attr('prev') , "Events", "event_output" );
	$('#event_changed_input').val(',Events');
	$('#pre_event_changed_input').val(',Events');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	Changed_Button_Status('save_event', 'Events');
});

$('#event_tab').on('click','#x',function(){ 
	console.log('Main Programm Removed'); 
	Add_Notification_2( $(this), $(this).attr('packid') , "Events", "event_output" );
	$('#event_changed_input').val(',Events');
	$('#pre_event_changed_input').val(',Events');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	Changed_Button_Status('save_event', 'Events');
});


$('#event_tab').on('click','.check_check',function(){ 
	$('#event_changed_input').val(', Event Basic');
	$('#pre_event_changed_input').val(',Event Basic');
	Changed_Button_Status('save_event', 'Events');
});

$('#event_tab').on('change','.clockpicker',function(){ 
	console.log('Event Programm Changed Input'); 
	Change_Inputs($(this).find('.time_valid'), $(this).closest('.event_formm'), "Events", "event_output", "iev_programm", "Events", false);
	$(this).closest('.event_schedule').find('.iev_programm_changed').val('1');
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	
	$('#event_changed_input').val(', Event Basic');
	$('#pre_event_changed_input').val(',Event Basic');
	Changed_Button_Status('save_event', 'Events');
});

$('#event_tab').on('change','.clockpicker2',function(){ 
	console.log('Event Programm Changed Input'); 
	Change_Inputs($(this).find('.time_valid'), $(this).closest('.event_formm'), "Events", "event_output", "iev_programm", "Events", false);
	$(this).closest('.event_schedule').find('.iev_programm_changed').val('1');
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	
	$('#event_changed_input').val(', Event Basic');
	$('#pre_event_changed_input').val(',Event Basic');
	Changed_Button_Status('save_event', 'Events');
});



$('.ev_gym_schedule').on('change','select',function(){ 
	console.log('Event Programm Changed Select'); 
	Change_Inputs($(this), $(this).closest('.event_formm'), "Events", "event_output", "iev_programm", "Events", false);
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	/*$('#programm_changed_input').val(',Πρόγραμμα');
	$('#pre_programm_changed_input').val(',Πρόγραμμα');*/
	Changed_Button_Status('save_event', 'Events');
});

$('.ev_gym_schedule').on('change input','input',function(){ 
	console.log('Event Programm Changed Input'); 
	Change_Inputs($(this), $(this).closest('.event_formm'), "Events", "event_output", "iev_programm", "Events", false);
	$(this).closest('.event_schedule').find('.iev_programm_changed').val('1');
	$(this).closest('.mprogramm').find('.mprogramm_changed').val('1');
	$(this).closest('.event_formm').find('.input_changed').val('1');
	Changed_Button_Status('save_event', 'Events');

});



$('#event_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_event', 'Events');
});
$('#event_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_event', 'Events');
});





/* Anouncement Change Listener*/
$('#anouncements_tab').on('change','select',function(){ 

	Change_Inputs($(this), $(this).closest('.anoun_formm'), "Anouncements", "anoun_schedule", "anoun", "Ανακοινώσεις", false);
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
	/*console.log('Anouncements Changed');
	var nid = $('#anouncements_tab').find('packet_id').val();
	$('#anoun_changed_' + nid).val('1');
	$('#anoun_changed_input').val(',Ανακοινώσεις');
	$('#pre_anoun_changed_input').val(',Ανακοινώσεις');*/
});

$('#anouncements_tab').on('change input','input',function(){ 
	Change_Inputs($(this), $(this).closest('.anoun_formm'), "Anouncements", "anoun_schedule", "anoun", "Ανακοινώσεις", false);	
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});

$('#anouncements_tab').on('change','textarea',function(){ 
	Change_Inputs($(this), $(this).closest('.anoun_formm'), "Anouncements", "anoun_schedule", "anoun", "Ανακοινώσεις", false);
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});

$('#anouncements_tab').on('click','.minus_icon_second',function(){ 
	Change_Inputs($(this), $(this).closest('.anoun_formm'), "Anouncements", "anoun_schedule", "anoun", "Ανακοινώσεις", false);
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});

$('#anouncements_tab').on('click','.check_check',function(){ 
	console.log('Offers packet basic update'); 
	$('#anoun_changed_input').val(', Anouncements Basic');
	$('#pre_anoun_changed_input').val(',Anouncements Basic');
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});


$('#anouncements_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});
$('#anouncements_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_anoun', 'Ανακοινώσεων');
});




/* Offers Change Listener*/
$('#offer_tab').on('change','select',function(){ 
	Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", false);
	Changed_Button_Status('save_offer', 'Προσφορών');
});

$('#offer_tab').on('change input','input',function(){ 
	if(!$(this).hasClass('css-checkbox')){
		Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", false);
	}
	else{
		Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", true);
	}
	Changed_Button_Status('save_offer', 'Προσφορών');
});

$('#offer_tab').on('change','textarea',function(){ 
	Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", false);
	Changed_Button_Status('save_offer', 'Προσφορών');
});


$('#offer_tab').on('click','.minus_icon_second',function(){ 
	//Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", false);
	console.log('Delete offer clicked with prev = ' + $(this).attr('prev'));
	Add_Notification_2( $(this), $(this).attr('prev') , "Offers", "offer_schedule" );
	$('#offer_changed_input').val(',Offers');
	$('#pre_offer_changed_input').val(',Offers');
	Changed_Button_Status('save_offer', 'Προσφορών');
});

$('#offer_tab').on('click','.check_check',function(){ 
	console.log('Offers packet basic update'); 
	$('#offer_changed_input').val(', Offers Basic');
	$('#pre_offer_changed_input').val(',Offers Basic');
	Changed_Button_Status('save_offer', 'Προσφορών');
});

$('#offer_tab').on('change input','input',function(){ 
	Changed_Button_Status('save_offer', 'Προσφορών');
});
$('#offer_tab').on('change input','textarea',function(){ 
	Changed_Button_Status('save_offer', 'Προσφορών');
});

/*

jQuery(function($) {
	$("#offer_tab .date_input").datepicker({
		dateFormat: 'dd/mm/yy',
		onSelect: function(dateText) {
			console.log('Offers Changed'); 
			Change_Inputs($(this), $(this).closest('.offerdiv_list'), "Offers", "offer_schedule", "offer", "Offers", false);
		}
	  }).on("change", function() {});
});
*/

/* Keys Change Listener*/
$('#keys_tab').on('change','select',function(){ 
	console.log('Keys Changed');
	$('#keys_changed_input').val(',Κλειδιά Αναζήτησης');
	$('#pre_keys_changed_input').val(',Κλειδιά Αναζήτησης');
	Changed_Button_Status('save_keys', 'Κλειδιών');
});


$('#keys_tab').on('change','input',function(){ 
	console.log('Keys Changed'); 
	$('#keys_changed_input').val(',Κλειδιά Αναζήτησης');
	$('#pre_keys_changed_input').val(',Κλειδιά Αναζήτησης');
	Changed_Button_Status('save_keys', 'Κλειδιών');
});

/* Person Photos Listener*/

/*$('#personel_tab').on('change','.cr-image',function(){ 
	console.log('Person Photo Changed'); 
	$('#personnel_changed_input').val(',Person Photos');
	$(this).prev('.person_changed').val('1');
});*/




  $(".accordion").click(function(e){
   

    this.classList.toggle("active");
    //var panel = this.nextElementSibling;
    var panel = this.previousElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight +35 + "px";
    } 
    });
	
	

	
var phone_class = document.getElementsByClassName("phone_valid");

for (var i = 0; i < phone_class.length; i++) {
	phone_class[i].addEventListener('input', function (e) {
	e.target.value = e.target.value.replace(/[^\d0-9]/g, '').replace(/(.{10})/g, '$1 ').trim();
	});
}

/*
var clock = document.getElementsByClassName("end_hour");

for (var i = 0; i < clock.length; i++) {
	clock[i].addEventListener('input', function (e) {
	e.target.value = e.target.value.replace(/^\d{1}:/, '0$&').replace(^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$), '$&0' ).trim();
	});
}*/
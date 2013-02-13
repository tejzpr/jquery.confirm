jquery.confirm
==============
jQuery.confirm is a simple wrapper for creating confirmation dialog boxes using the jQueryUI library.

Usage:

Step 1.Create a Callback Function tto handle User click
		function p_callback(ret)
		{
			alert(ret); //Alerts true/false based on user click
		}
		
Step 2. Configure buttons, message to show and the callback
		var prompt_Conf={
			mesg:"This is a test message.",
			okText:"Okay",
			cancelText:"Cancel",
			callback:p_callback
		};
		
Step3. Call the function jConfirm() with the parameters		
		$(document).ready(function(){
			jConfirm(prompt_Conf);
		});
		
		
Dependencies : 
	1) jQuery.js
	2) jQueryui
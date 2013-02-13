/**
 *@Copyright Tejus Pratap tejuspratap@gmail.com
 *@usage jConfirm();
 *@params A javascript object with the following params
	{
		callback:null, 
		okText:"Ok",
		cancelText:"Cancel",
		mesg:"Continue?"
	}
*/
function jConfirm(def_opts){
    var options = {
        callback:null,
        okText:"Ok",
        cancelText:"Cancel",
        mesg:"Continue?"
    };
    var identifier=Math.floor(Math.random()*1111)+Math.floor(Math.random()*5111)
    jQuery.extend(options, def_opts);
    var prompt_id = "custom_prompt"+identifier;
    jQuery("body").append("<div id='"+prompt_id+"'></div>");
    jQuery("#"+prompt_id).html(options.mesg);
    var prompt_buttons = {};
    prompt_buttons[options.okText] = function(){
        options.callback!=null?options.callback(true):"";
        jQuery(this).empty();
        jQuery(this).dialog("destroy");
        jQuery("#"+prompt_id).remove();
    };
    prompt_buttons[options.cancelText] = function(){
        options.callback!=null?options.callback(false):"";
        jQuery(this).empty();
        jQuery(this).dialog("destroy");
        jQuery("#"+prompt_id).remove();
    };
    jQuery("#"+prompt_id).dialog({
        autoOpen: true,
        modal: true,
        buttons:prompt_buttons,
        resizable: false,
        closeOnEscape: false,
        open: function(event, ui) {
            jQuery(".ui-dialog-titlebar",jQuery(this).parent()).hide();
        }
    });
}

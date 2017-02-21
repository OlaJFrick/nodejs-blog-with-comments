class MessageForm {

    constructor(callback) {

    	$('.msg-form-content').template('message-form', {});

        // Animate Check-box when checked. 

        $('body').on('click', '.form-check-input', function(){
            $(this).toggleClass('animated jello');
        });


    	$('.msg-form-content').on('click', '.msg-submitter', function(event) {
            event.preventDefault();
    	    var title = $('.msg-title-input').val();
    	    var message = $('.msg-message-input').val();
    	    var username = $('.msg-name-input').val(); 
    	    var date = formatDate();
            var fulldate = new Date();
    	   
    	    if ($('.form-check-input').is(':checked')) {

    	        Message.create({
    	            username: username,
    	            title: title,
    	            message: message,
    	            formatdate: date,
                    fulldate: fulldate
    	        }, function() {
                     location.reload();   
                    
                    // Temporary Solution
                    //  I want only the message-list template to be updated/reloaded
                    // And display an alertBox. alertbox();
                    // $('.msg-list-content').empty().template('message-list', { messages: messages});

    	        });
    	    }		
    	});

    	function formatDate() {

    		var date = new Date();
    	    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    	    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    	    var month = monthNames[date.getMonth()];
    	    var dayName = dayNames[date.getDay()];
    	    var day = date.getDate();
    	    var hour = date.getHours();
    	    var min = date.getMinutes();
    	    var x = ' ';
        	var niceFormat = dayName + x + month + x + day + x + hour + ':' + min;

        	return niceFormat;
    	}

        function alertbox() {
            $('.alert-success').show().fadeOut(3000);
        }

    }
}
class MessageForm {

    constructor(callback) {

    	$('.msg-form-content').template('message-form', {});

    	$('.msg-form-content').on('click', '.msg-submitter', function() {
    	    var title = $('.msg-title-input').val();
    	    var message = $('.msg-message-input').val();
    	    var username = $('.msg-name-input').val(); 
    	    var date = formatDate();
    	   
    	    if ($('.form-check-input').is(':checked')) {
    	        // alert('Thank you for your message ' + username + '!');

    	        Message.create({
    	            username: username,
    	            title: title,
    	            message: message,
    	            date: date
    	        }, function() {
    	            location.reload();
    	        });
    	    }		
    	});

    	function formatDate() {

    		var date = new Date();
    	    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    	    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    	    var month = monthNames[date.getMonth()];
    	    var dayName = dayNames[date.getDay()];
    	    var day = date.getDate();
    	    var hour = date.getHours();
    	    var min = date.getMinutes();
    	    var x = ' ';
        	var niceFormat = dayName + x + month + x + day + x + hour + ':' + min;

        	return niceFormat;
    	}

    }
}
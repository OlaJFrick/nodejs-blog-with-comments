class MessageForm {

    constructor() {

        $('.msg-form-content').template('message-form', {  });


		$('.msg-form-content').on('click', '.msg-submitter', function(){
        	var title = $('.msg-title-input').val();
        	var message = $('.msg-message-input').val();
        	var username = $('.msg-name-input').val();
        	var date = new Date();

	        Message.create({
	        	username: username,
	        	title: title,
	        	message: message,
	        	date: date
	        }, function(){
	        	console.log(title + message + username + date);
	        });
	        
			
		});


    }
}
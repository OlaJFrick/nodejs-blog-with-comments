class MessageList {

    constructor() {

        Message.find('find/{username:/.*/}', getMessages);

        function getMessages(messages, err) {

        	// count the length of messages
        	let messagecount = $(messages).toArray().length;

        	$('.msg-list-content').template('message-list', { messages: messages, messagecount: messagecount});

        	$('.alert-success').hide();

        	// $('.list-group-item').toggleClass('animated fadeinDown');

        }
    }
}

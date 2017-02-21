class MessageList {

    constructor() {

        Message.find('find/{username:/.*/}', getMessages);

        function getMessages(messages, err) {

        	$('.msg-list-content').template('message-list', { messages: messages});
        }
    }
}

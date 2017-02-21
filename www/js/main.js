// List ALL RestEntity classes here
var Message = new RestEntity('message');


(()=>{

	$.loadTemplates([
		'main-page',
		'message-form',
		'message-list'
	], onTemplatesLoaded);

	function onTemplatesLoaded() {
		new MainPage();
		new MessageForm();
		new MessageList();
	}

})();
// The RestEntity classes here
var Message = new RestEntity('message');
var Blog = new RestEntity('blog');

(()=>{
	$.loadTemplates([
		'main-page',
		'message-list',
		'message-form'
	], onTemplatesLoaded);

	function onTemplatesLoaded() {
		new MainPage();
		new MessageList();
		new MessageForm();
	}
})();
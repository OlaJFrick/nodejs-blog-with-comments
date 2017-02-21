class MainPage {

	constructor() {
		$('.main-page-content').template('main-page', { });

		$('body').on('click', '.form-check-input', function(){
			makeJello(this);
		});

		function makeJello(element){
			$(element).toggleClass('animated jello');
		}

	}
}
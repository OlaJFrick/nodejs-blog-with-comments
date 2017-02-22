class MainPage {

	constructor() {

		Blog.find('find/{title:/.*/}', createTemplate);

		function createTemplate(blogposts, err){

			var recentPost = blogposts[0];
			// var image = "/images/" + recentPost.img;
			// console.log(image	);

			$('.main-page-content').template('main-page', {
				blog: blogposts,
				title: recentPost.title,
				nicedate: recentPost.nicedate,
				author: recentPost.author,
				main: recentPost.main,
				image: recentPost.img
			});
		}

	}
}
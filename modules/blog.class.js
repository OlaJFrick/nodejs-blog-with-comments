module.exports = class Blog {

	schema() {
	    return {
			img: {type: String, required: true},
			title: {type: String, required: true},
			nicedate: {type: String, required: true},
			fulldate: {type: Date, required: true},
			author: {type: String, required: true},
			main: {type: String, required: true}
    	};
	}

};
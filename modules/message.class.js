module.exports = class Message {

	schema() {
	    return {
			username: {type: String, required: true},
			title: {type: String, required: true},
			message: {type: String, required: true},
			formatdate: {type: String, required: true},
			fulldate: {type: Date, required: true}
    	};
	}

};
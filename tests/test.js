var myMod = require('../lib/index.js');

myMod.getRhymes('train')
	.then(function(d) {
	 	console.log('done');
	})
	.fail(function(e) {
		console.log(e);
	})
	.done();


return myMod.getRhymes('train')
	.then(function(d) {
	 	console.log('done');
	})
	.fail(function(e) {
		console.log(e);
	});

// console.log(myMod.getRhymes('train', 10));

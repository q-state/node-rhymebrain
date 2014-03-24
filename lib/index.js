var rhymeBrainUrl = 'http://rhymebrain.com/talk?function=getRhymes&word=';

exports.dist = function(p1, p2){
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

exports.testMessage = function() {
	return "Test Message";
};

exports.getRhymes = function(inputWord, maxWords, syllables) {
    var request = require('request');
    var url = require('url');
    var Q = require('q');
    var jpath = require('node-jpath');

    var syllables = syllables || -1;

    var fqUrl = url.format({
        protocol: 'http',
        host: 'rhymebrain.com',
        pathname: 'talk',
        query: {
            'function'  : 'getRhymes',
            'word'      : inputWord,
            'maxResults'  : maxWords || 50
        }
    });

    console.log('calling ', fqUrl);

    var deferred = Q.defer();

    request(fqUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body),
                match = null;

            if(syllables != -1)
            {
                match = jpath.filter(result, "*[syllables == " + syllables + "]");
            }
            else {
                match = result;
            }

            deferred.resolve(match);
        }
        else
            deferred.reject(error);
    });

    return deferred.promise;
};
function RhymeBrainDefinition() {

    var url = require('url');

    this.rhymeBrainUrl = 'http://rhymebrain.com/talk?function=getRhymes&word=';

    this.buildUrl = function(query) {
        return url.format({
            protocol: 'http',
            host: 'rhymebrain.com',
            pathname: 'talk',
            query: query
        });
    };
};

RhymeBrainDefinition.prototype.getRhymes = function (word, syllables, maxWords) {
    var Q = require('q');
    var jpath = require('node-jpath');
    var request = require('request');
    var syllables = syllables || -1;

    var fqUrl = this.buildUrl({ 
        'function'  : 'getRhymes',
        'word'      : word,
        'maxResults'  : maxWords || 500       
    });

    console.log('calling ', fqUrl);

    var deferred = Q.defer();

    request(fqUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body),
                match = result;

            if(syllables >= 0)
                match = jpath.filter(result, "*[syllables == " + syllables + "]");

            deferred.resolve(match);
        }
        else
            deferred.reject(error);
    });

    return deferred.promise;
};

RhymeBrainDefinition.prototype.getWord = function (word) {
    var Q = require('q');
    var request = require('request');

    var fqUrl = this.buildUrl({ 
        'function'  : 'getWord',
        'word'      : word,
        'maxResults'  : maxWords || 500       
    });

    console.log('calling ', fqUrl);

    var deferred = Q.defer();

    request(fqUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body),

            deferred.resolve(result);
        }
        else
            deferred.reject(error);
    });

    return deferred.promise;
};

module.exports = exports = new RhymeBrainDefinition();
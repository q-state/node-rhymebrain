node-rhymebrain
===============

node js interface to rhymebrain.com

Usage:

<pre><code>var rb = require("node-rhymebrain");

// .getRhymes('word', syllables, maxResults);
// (Pass syllables > 0 to filter by number of syllables)
rb
  .getRhymes('train', 10)       
  .then(function (result) {
    /*
    	[
    		{"word":"brain","freq":24,"score":300,"flags":"bc","syllables":"1"},
    		{"word":"plain","freq":23,"score":300,"flags":"bc","syllables":"1"},
    		...
    	]
    */
  })
  .done();

// .getWord('word', syllables, maxResults);
rb
  .getWord('hello')       
  .then(function (result) {
    /*
    	{"word":"hello","pron":"HH AH0 L OW1","ipa":"h\u028c\u02c8lo\u028a\u032f","freq":19,"flags":"bc","syllables":"2"}
    */
  })
  .done();

// .getPortmanteaus('cat', maxResults);
rb
  .getPortmanteaus('cat', 10)       
  .then(function (result) {
    /*
    	[
    		{"source":"cat,attitude","combined":"catttitude,cattitude"},
			{"source":"cat,attitudes","combined":"catttitudes,cattitudes"},
    		...
    	]
    */
  })
  .done();

</code></pre>

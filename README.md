node-rhymebrain
===============

node js interface to rhymebrain.com

Usage:

<pre><code>var rb = require("node-rhymebrain");

rb
  // .getRhymes('word', syllables, maxResults);
  // (Pass syllables > 0 to filter by number of syllables)
  .getRhymes('train', 10)       
  .then(function (result) {
    console.log(result);
  })
  .done();
</code></pre>

node-rhymebrain
===============

node js interface to rhymebrain.com

Usage:

<pre><code>var rb = require("node-rhymebrain");

rb
  .getRhymes('train', 10)
  .then(function (result) {
    // do something with the data
  })
  .done();
</code></pre>

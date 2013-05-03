Whiskerjs
=========

A Simple JS "library" to create Box and Whisker plot using the DOM.

Only requires insertion of two pieces of HTML for functionality:

In <head>:

    <!-- Whisker Embed Code -->
    <script type="text/javascript" src="js/whisker.js"></script>
    <link rel="stylesheet" href="css/whisker.css" type="text/css">
    <!-- End Whisker Embed Code -->

in <body>:

    <!-- Whisker JS Graph -->
    <div id='WJSGraph'></div>

The example file index.html demos it.

call with:
    wJSDrawGraph(graphWidth, min, q1, median, q3, max);

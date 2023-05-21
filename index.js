// Primary file for the api

// Dependency
var http = require('http');
var url = require('url');

// Respond to all requests with a string
var server = http.createServer(function(req, res){
    // Parse url
    var parsedUrl = url.parse(req.url, true)

    // Get path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get query string parameters object
    var queryStringsObject = parsedUrl.query;

    // Get method
    var method = req.method.toLowerCase();

    // Get headers
    var headers = req.headers;

    // Send response 
    res.end('Hellow world');

    // Print request data to console
    console.log('The headers in the request are \n', headers);
});

// Listen on port 3000
server.listen(3000, () => {
        console.log('Server is listening on port 3000 now.');
});

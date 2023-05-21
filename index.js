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

    // Send response 
    res.end('Hellow world');

    // Print request data to console
    console.log('The path from request is: ' + trimmedPath + ' with method: ' + method + ' and query string params: ', queryStringsObject);
});

// Listen on port 3000
server.listen(3000, () => {
        console.log('Server is listening on port 3000 now.');
});

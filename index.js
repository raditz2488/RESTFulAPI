// Primary file for the api

// Dependency
var http = require('http');
var url = require('url');

// Respond to all requests with a string
var server = http.createServer(function(req, res){
    // Parse url
    var parsedUrl = url.parse(req.url, true)

    // Get path
    var path = parsedUrl.path
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Send response 
    res.end('Hellow world');

    // Print path
    console.log('The path from request is: '+ trimmedPath);
});

// Listen on port 3000
server.listen(3000, () => {
        console.log('Server is listening on port 3000 now.');
});

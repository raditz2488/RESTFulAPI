// Primary file for the api

// Dependency
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

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

    // Collect the payload if it exists
    // Create the string decoder 
    var decoder = new StringDecoder('utf-8');

    // Collect payload string asynchronously
    var payload = ''
    req.on('data', function(data) {
        payload += decoder.write(data);
    });

    // When request completes end the collection of payload
    // Send the response and log payload
    req.on('end', function() {
        payload += decoder.end();

        // Send response 
        res.end('Hellow world');

        // Print request data to console
        console.log('The payload in the request is: ', payload);
    });
});

// Listen on port 3000
server.listen(3000, () => {
        console.log('Server is listening on port 3000 now.');
});

// Primary file for the api

// Dependency
var http = require('http');

// Respond to all requests with a string
var server = http.createServer(function(req, res){
    res.end('Hellow world')
});

// Listen on port 3000
server.listen(3000, () => {
        console.log('Server is listening on port 3000 now.');
});

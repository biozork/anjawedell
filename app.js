var http = require('http');
var port = 3000;

var requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
}

var server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
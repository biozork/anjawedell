var http = require('http');
var port = process.env.PORT || 3000;

var requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server! ninjanja er sej');
}

var server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
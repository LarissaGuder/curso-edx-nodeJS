// request.headers: Information about incoming requests headers such as Connection, Host, Authorization, etc (see list here)
// request.method: Information about the incoming requests methods such as GET, POST, PUT, DELETE, OPTIONS, HEAD, etc.
// request.url: Information about the incoming request URL, such as /accounts, /users, /messages, etc.

const http = require('http')
const port = 3000
http.createServer((request, response) => {
  console.log(request.headers)
  console.log(request.method)
  console.log(request.statusCode)
  console.log(request.url)
  if (request.method == 'POST') {
    let buff = ''
    request.on('data', function (chunk) {
      buff += chunk  
    })
    request.on('end', function () {
      console.log(`Body: ${buff}`)
      response.end('\nAccepted body\n\n')
    })
  } else {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World\n')
  } 
}).listen(port)
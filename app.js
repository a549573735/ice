 const http = require('http')
 const hostname = '127.0.0.1';
 const port =3006;

 const server=http.createServer(function(req, res) {
     res.writeHead(200, { 'Content-Type': 'text/plain' })
     res.end('hello ice')
 })
 server.listen(port,hostname,()=>{
 	console.log(`server running on http://${hostname}:${port}`)
 })




 

const http=require('http');


var server=http.createServer((request,response)=>{
    console.log("request is received from client");
    response.write("<h1>Welcome</h1>");
    response.write("<hr/");
    response.write("ol> <li>PGDAC</li><li>PGDITISS</li><li>DBDA</li><li>PGDAC</li> </ol>");
    response.end();


});
server.listen(8000);
console.log("HTTP server is listening on port 8000");
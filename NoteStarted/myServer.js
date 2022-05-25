var http = require('http');
const { url } = require('inspector');

var myserver = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html' });
    // if(response.url == '/'){
    //     response.write('<html><body><p style = "color:red">This is home Page.</p></body></html>');
    // }else if(response.url == '/student'){
    //     response.write('<html><body><p style = "color:blue">This is student Page.</p></body></html>');
    // }else{
    //     response.write('<html><body><p style = "color:red">NOT FOUND</p></body></html>');
    // }
    

    response.end()
})

myserver.listen(5000)
console.log("Server is running!")
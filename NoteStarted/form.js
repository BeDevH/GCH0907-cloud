var http = require('http');
const { url } = require('inspector');

var myserver = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html' });
    response.write('<html><body><form><label for="fname">Name:</label><br><input type="text" id="fname" name="fname"><br><label for="fname">Gender:</label><br><input type="radio" id="css" name="fav_language" value="CSS"><label for="css">Male</label><br><input type="radio" id="javascript" name="fav_language" value="JavaScript"><label for="javascript">Female</label><br><br><label for="">Choose your country:</label><select name="" id=""><option value="">VN</option><option value="">USA</option><option value="">SING</option><option value="">PHILIP</option></select><br><input type="submit" value="OK"></form> </body></html>');
    response.end()
})

myserver.listen(3000)
console.log("Server is running!")
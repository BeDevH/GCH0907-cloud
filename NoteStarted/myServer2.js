var http =require('http')
var fs = require('fs')

var myserver = http.createServer(function(req,res){
    fs.readFile('mydata.txt','utf8',function(err,data){
        if(!err){
            res.write(data)
            res.end()
        }else{
            res.write("Co gi do sai sai!")
            res.end()
        }
    })
})

myserver.listen(4000)
console.log('server is running')
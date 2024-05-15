const http = require('http')
const  url  = require('url')

http.createServer((req,resp)=>{
    // console.log(req)
    resp.writeHead(200,{'Content-type':'application\json'})
    console.log("usr seend",req.url)
     let queryobject = url.parse(req.url,true).query
    //  console.log(queryobject)
     let uname = queryobject.uname
     let pwd = queryobject.pwd
     if(uname == "admin" && pwd == "admin"){
        resp.write('<h1>login successsfully</h1>')
     }
     else {
          resp.write("<h1>Login Failed</h1>")
     }
     console.log(queryobject)
    console.log('get url',url)
  
  
    resp.end()
}).listen(5000)
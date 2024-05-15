const express = require('express')
const app = express()
const port  = 1300
app.get('/',(req,resp)=>{
    console.log("api hitted by user")
    console.log("request is ",req.url)


  if(Object.keys(req.query).length == 0) {
      return resp.send("<h1>Please fill form first then submit</h1>")
  }
  else if(Object.keys(req.query).length == 1) {
    console.log(req.query)
    return resp.send("<h1>Please fill all fields in form or provide then submit</h1>")
  }
 else if(req.query.uname == 'admin' && req.query.pwd == 'admin'){
    resp.send("<h1>Login successfully")
  }else{
    resp.send("<h1>Login failed</h1>")
  }

}).listen(port,()=>{
  console.log("api hit successfully")
})








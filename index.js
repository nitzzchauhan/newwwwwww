const http = require('http')
const data = {age:5}

const fs = require('fs')
const demo = fs.readFileSync('demo.json') 
// console.log(JSON.parse(demo))

const server = http.createServer((req,res)=>{
    // res.end(JSON.stringify(data))
    // if (req.url == "/home"){
    //     res.end("I am node js")
    // }
    switch(req.url){
        case '/one':
            res.end("one by one") 
            break
        case '/json':
            // res.setHeader('content-type','application/json')
            res.end(demo)
            break
        default :
            res.writeHead(404)
            res.end("three")

    }

    console.log("hi")
    // res.end("<h1>nitin</h1>")
    // res.setHeader('dummy','dummyvlue')
    console.log(req.url)
    
    
})

server.listen(8080)
  const http = require("http");
  const fs = require("fs");

const server = http.createServer((req, res) => {


    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
        const objData = JSON.parse(data);


    // console.log(req.url);
    if(req.url == "/"){
        res.end("hello from the home side");
    }else if (req.url == "/about") {
        res.end("hello from the aboutus side");
    }else if (req.url == "/contact") {
        res.end("hello from the contact side");
    } else if (req. url == "/userapi") {
        res.writeHead(200, { "content-type" : "application/json" });
        res.end(objData[0].detail);
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("<h1>404 error page : page doesen't exist<h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});
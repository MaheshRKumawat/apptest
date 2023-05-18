const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method == "GET"){
        res.write(JSON.stringify("Invoke this application using post method"));
        res.end();
    }else if(req.method == "POST"){
        res.write(JSON.stringify("Woah post method"));
        console.log(req);
        res.end();
    }else{
        res.write(JSON.stringify("Invalid request method"));
        res.end();
    }
});

server.listen(8080);
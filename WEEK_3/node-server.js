const http = require("http");

const host = "localhost";
const port = 8000;

const requireListener = (req, res) =>{
    // Untuk route url
    if(req.url == "/"){
    res.end("Hello World 2023!");
    }
    else if(req.url == "/about"){
    res.end("This is about page");
    }
    else if(req.url = "/about/trending"){
        res.end("This is about trending");
        }
}
const server = http.createServer(requireListener);

server.listen(port,host, () => {
    console.log(`Server is runnning on http://${host}:${port}`);
});

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/api/data" && req.method === "GET") {
        res.end(JSON.stringify({ data: [1, 2, 3] }));
        return;
    }

    res.statusCode = 404;
    res.end("Not Found");
});

server.listen(8080, () => console.log("server running"));

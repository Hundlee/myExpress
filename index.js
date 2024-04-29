const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/api/data" && req.method === "GET") {
        res.end(JSON.stringify({ data: [1, 2, 3] }));
        return;
    }

    if (req.url === "/api/data" && req.method === "POST") {
        const chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });
        req.on("end", () => {
            const body = Buffer.concat(chunks).toString();
            const parseBody = JSON.parse(body);
            data.push(parseBody);
            res.end(JSON.stringify({ data }));
        });
        return;
    }

    res.statusCode = 404;
    res.end("Not Found");
});

server.listen(8080, () => console.log("server running"));

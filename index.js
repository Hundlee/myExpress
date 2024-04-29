const myExpress = require("./myExpress");

const data = [1, 2, 3];

const app = myExpress();

app.get("/api/data", (req, res) => {
    res.end(JSON.stringify({ data }));
});

app.post("/api/data", (req, res) => {
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
});

app.listen(8080, () => console.log("server running"));

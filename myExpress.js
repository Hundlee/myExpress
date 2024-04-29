const http = require("http");

function myExpress() {
    const app = {};
    const routes = [];

    app.get = (path, handler) => {
        routes.push({ path, method: "GET", handler });
    };

    app.post = (path, handler) => {
        routes.push({ path, method: "POST", handler });
    };

    app.listen = (port, callback) => {
        const server = http.createServer((req, res) => {
            const route = routes.find(
                (route) => req.url === route.path && req.method === route.method
            );

            if (route) {
                route.handler(req, res);
                return;
            }

            res.statusCode = 404;
            res.end("Not Found");
        });

        server.listen(port, callback);
    };

    return app;
}

module.exports = myExpress;

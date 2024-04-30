const routes = [];

function addRoute(path, method, handler) {
    routes.push({ path, method, handler });
}

function handleRequest(req, res) {
    const route = routes.find(
        (route) => req.url === route.path && req.method === route.method
    );

    if (route) {
        route.handler(req, res);
        return true;
    }

    return false;
}

module.exports = {
    addRoute,
    handleRequest,
};

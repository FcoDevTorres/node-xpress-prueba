const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, "aplication/json");
    let respJson = {
        id: 1,
        nombre: "Francisco",
        url: req.url
    }
    res.write(JSON.stringify(respJson));

    res.end();
}).listen(8081);

console.log("Escuchando el puerto 8081");
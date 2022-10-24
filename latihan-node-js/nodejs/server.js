var http = require('http');

var server = http.createServer(function (req, res) {
    res.end("Hai, Wilujeng Sumping di Tasikmalaya");
});

server.listen(8000);

console.log("server running on http://localhost:8000");
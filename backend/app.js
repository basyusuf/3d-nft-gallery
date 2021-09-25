const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));

const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../frontend/index.html');
});

server.listen(3000, () => {
    console.log('listening on => 3000');
});

module.exports = app;
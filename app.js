const http = require("http");
const bodyParser = require("body-parser");
const path = require('path');

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const server = http.createServer(app);

server.listen(3000);

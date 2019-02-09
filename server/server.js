const path = require("path");
const express = require("express");
const itemRoutes = require("./routes/item");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use("/api/item", itemRoutes);

module.exports = server;

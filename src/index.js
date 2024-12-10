const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();

server.use(cors());

const port = 4001;
server.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

const staticServerPath = "./web/dist";

server.use(express.static(staticServerPath));

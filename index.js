process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

if (cluster.isMaster) {
  //cause index.js to be executed *again* but
  // in child mode
  cluster.fork();
  cluster.fork();
} else {
  //server related code
  // I'm a child c:

  const crypto = require("crypto");
  const express = require("express");
  const app = express();

  app.get("/", (_, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hi there");
    });
  });

  app.get("/fast", (_, res) => {
    res.send("this was fast there");
  });

  app.listen(3000);
}

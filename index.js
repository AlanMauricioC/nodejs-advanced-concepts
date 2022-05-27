const cluster = require("cluster");

if (cluster.isMaster) {
  //cause index.js to be executed *again* but
  // in child mode
  cluster.fork();
} else {
  //server related code
  // I'm a child c:

  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (_, res) => {
    doWork(5000);
    res.send("hi there");
  });

  app.listen(3000);
}

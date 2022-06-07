const express = require("express");
const crypto = require("crypto");
const app = express();
const { Worker } = require("worker_threads");

app.get("/", (req, res) => {
  // gets the worker from a different file
  const worker = new Worker("./worker.js");

  // when recives a message =>
  worker.on("message", function (message) {
    console.log(message);
    res.send("" + message);
  });

  // sends a "start!" message
  worker.postMessage("start!");
});

app.get("/fast", (req, res) => {
  res.send("This was fast!");
});

app.listen(3000);

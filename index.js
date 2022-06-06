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

const express = require('express');
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

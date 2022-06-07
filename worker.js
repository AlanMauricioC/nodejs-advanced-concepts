const { parentPort } = require("worker_threads");

parentPort.on("message", () => {
  let counter = 0;
  // make some hard work :construction_worker:
  while (counter < 1e9) {
    counter++;
  }
  // send a message to the app
  parentPort.postMessage("" + counter);
});

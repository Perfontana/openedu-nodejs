const { createReadStream } = require("fs");

const { cors } = require("./cors-middleware");
const express = require("express");

const app = express();

app.use(cors);

app.get("/", (_, res) => {
  res.setHeader("X-Author", "stalmahov");

  res.status(200).send("stalmahov");
});

app.get("/login", (_, res) => {
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");

  res.status(200).send("stalmahov");
});

app.get("/sample", (_, res) => {
  res.status(200).send(`
    function task(x) {
      return x * this ** 2
    }
  `);
});

app.get("/promise", (_, res) => {
  res.status(200).send(`
  function task(x) {
    return x < 18 ? Promise.resolve(x) : Promise.reject(x)
  }
`);
});

app.get("/fetch", (_, res) => {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");

  createReadStream("./task3.html").pipe(res);
});

app.listen(3000, () => {
  console.log("Server started");
});

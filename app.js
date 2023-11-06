const { createReadStream } = require("fs");

const { cors } = require("./cors-middleware");
const express = require("express");

const NAME = "stalmahov";

const app = express();

app.use(express.text());
app.use(cors);

app.get("/", (_, res) => {
  res.setHeader("X-Author", NAME);

  res.status(200).send(NAME);
});

app.get("/login", (_, res) => {
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");

  res.status(200).send(NAME);
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

app.get("/result4", (req, res) => {
  res.status(200).send({
    message: NAME,
    "x-result": req.headers["x-test"],
    "x-body": req.body,
  });
});

app.listen(3000, () => {
  console.log("Server started");
});

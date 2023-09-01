const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.setHeader("X-Author", "stalmahov");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).send("stalmahov");
});

app.listen(80, () => {
  console.log("Server started");
});

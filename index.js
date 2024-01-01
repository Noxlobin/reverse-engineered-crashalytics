import fs from "node:fs";
import express from "express";
import { exit } from "node:process";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "cats!",
    test: true,
  });

  let status = res.statusCode;
  fs.writeFile("./status.txt", `status: ${status}`, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
});

app.post("/", (req, res) => {
  res.status(501).json({
    badRequest: true,
  });

  let status = res.statusCode;
  fs.writeFile("./status.txt", `status: ${status}`, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
});

app.listen(3000, () => {
  console.log("Listening on localhost:3000!");
});

process.on("SIGINT", () => {
  console.log("bye");
  fs.unlink("status.txt", (err) => {
    if (err) console.log(err.message);
  });
  exit(0);
});

import express from "express";
import { readFile } from "fs/promises";

const Route = express.Router();

try {
  const data = await ReadFileLink();

  if (data.length >= 0) {
    data.forEach((v) => {
      Route.get("/" + v.id, (req, res) => {
        res.redirect(v.link);
      });
    });
  } else {
    Route.get("*", (req, res) => {
      res.send("404 FILE NOT FOUND");
    });
  }
} catch (error) {
  console.log(error.message);
}

Route.get("/", (req, res) => {
  res.send("404 FILE NOT FOUND");
});
Route.get("*", (req, res) => {
  res.send("404 FILE NOT FOUND");
});

async function ReadFileLink() {
  const file = await readFile("./data/data.json", "utf-8");

  return JSON.parse(file);
}

export default Route;

// menyiapkan web server untuk ujicoba redirect

import express from "express";
import Route from "./Routes.js";
const port = 3000,
  server = express();

server.use(express.urlencoded({ extended: true }));
server.use(Route);
server.listen(port, () => {
  console.log(`Server Listen to port ${port}`);
});

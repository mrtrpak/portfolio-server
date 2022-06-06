import express from "express";
const App = express();
const PORT =  3333;

import { soccerKey } from './secret.js';
console.log(soccerKey);

App.get("/", (req, res) => {
  res.send("hello world");
});

App.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

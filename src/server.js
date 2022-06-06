import express from "express";
const App = express();
const PORT =  3333;

import { soccerKey } from '../secret';
console.log(soccerKey);

App.get("/", (req, res) => {
  res.send(soccerKey);
});

App.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

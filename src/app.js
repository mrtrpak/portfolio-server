import express from "express";
import config from "./config/config.json" assert {type: "json"};
const App = express();

const env = process.env.NODE_ENV;
const configuration = config[env];

import { soccerKey } from './secret.js';
console.log(soccerKey);

App.get("/", (req, res) => {
  res.send("hello world");
});

App.listen(configuration.PORT, () => {
  console.log(`App listening on port ${configuration.PORT}`);
});

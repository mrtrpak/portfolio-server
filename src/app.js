const express = require('express');
const config = require('./config/config.json');
const App = express();

const env = process.env.NODE_ENV;
const configuration = config[env];

const { soccerApi } = require('./secret.js');
console.log(soccerApi);

App.get("/soccer", (req, res) => {
  res.send("hello world");
});

App.listen(configuration.PORT, () => {
  console.log(`App listening on port ${configuration.PORT}`);
});

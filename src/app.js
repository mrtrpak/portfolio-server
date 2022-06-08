const express = require('express');
const App = express();
const { soccerApi } = require('./secret');

App.get("/soccer", (req, res) => {
  res.send(soccerApi);
});

module.exports = App;
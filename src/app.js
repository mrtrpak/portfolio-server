const { default: axios } = require('axios');
const express = require('express');
const App = express();

const { soccerKey } = require('./secret');



App.get("/", (req, res) => {
  res.send("hello");
});

App.get("/soccer", (req, res) => {
  const response = axios.get("https://api.football-data.org/v2/competitions/BL1/standings", {
      headers: {
        'X-Auth-Token': soccerKey
      }
  })
  .then(res => console.log(res.data))
  .catch(err => err);

  res.send(response);
})

module.exports = App;
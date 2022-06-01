const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to server")
});

app.get("/soccer", (req, res) => {
  let code = req.query.code;
  console.log(req, code, "server check");

  if (process.env.NODE_ENV === 'development') {
    let { soccerKey }  = require('./secret');
  } else if (process.env.NODE_ENV === 'production') {
    let soccerKey = process.env.soccerKey;
  }

  fetch(
    `https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/${code}/standings`,
    { 
      method: "GET",  
      headers: { "X-Auth-Token": soccerKey }
    }
  )
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
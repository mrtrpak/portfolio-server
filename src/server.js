const express = require("express");
const App = express();
const PORT =  3333;

const { soccerKey } = require('../secret');
console.log(soccerKey);

App.get("/", () => {

});

App.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

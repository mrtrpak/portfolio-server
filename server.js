const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("welcome to server")
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
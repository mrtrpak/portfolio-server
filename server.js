const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
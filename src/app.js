const http = require('http')
const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.listen(3000, () => console.log('App listeining in', 3000))


app.use(express.json());
app.use(cors());
app.use(router)


module.exports = app;
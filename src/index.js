const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const os = require("os");

const parameters = new Object();
parameters.key1FromConfigmap = process.env.KEY_ON_CM1 || "não definido";
parameters.key2FromConfigmap = process.env.KEY_ON_CM2 || "não definido";
parameters.key1FromSM = process.env.KEY_ON_SM1 || "não definido";
parameters.key2FromSM = process.env.KEY_ON_SM2 || "não definido";
parameters.hostname   = os.hostname();

app.get('/', (req, res) => {
  res.json(parameters)
})

app.get('/health', (req, res) => {
  res.send('health')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

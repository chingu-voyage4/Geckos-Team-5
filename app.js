const express = require('express');
const app = express();
const BodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('hello from the / route')
})

app.listen(3030, () => {
  console.log('server is started')
})
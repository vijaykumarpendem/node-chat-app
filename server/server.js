const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Vijay!');
})

app.listen(port, () => {
  console.log('Server up at port', port);
})

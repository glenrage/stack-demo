const express = require('express');
const app = express();
const path = require("path")
const data = require('./db/data.json')

const buildPath = path.join(__dirname, 'client', 'build');
app.use(express.static(buildPath));

app.get('/api/products/id/data', (req, res) => {
  try {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
  } catch(err)  {
    console.log(err)
  }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server listening on ${port}`); // eslint-disable-line no-console

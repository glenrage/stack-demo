const express = require('express');
const app = express();

app.get('/api/products/id/data', (req, res) => {
  try {
    const data = require('./db/data.json')
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
  } catch(err)  {
    console.error(err)
  }
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server listening on ${port}`); // eslint-disable-line no-console

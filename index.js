console.log(process.env.NODE_ENV);

const express = require('express')
const app = express()
const port = 3100;
app.get('/', (req, res) => {
  console.log('getting at /');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a route
app.get('/comments', (req, res) => {
  res.send('Hello from the comments.js file!');
});
// listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
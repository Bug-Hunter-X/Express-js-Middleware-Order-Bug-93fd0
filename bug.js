const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon bug: Incorrect use of middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use((req, res, next) => {
  //This middleware will never be called because the error handler above catches everything. 
  res.send('This will never be executed');
});
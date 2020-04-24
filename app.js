const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('middleware 2');
  res.send('<h1>Users route</h1>');
});
app.use((req, res, next) => {
  console.log('middleware 1');
  next();
});
app.use('/', (req, res, next) => {
  console.log('done');
  res.send('<h1>App route "/"</h1>');
});

app.listen(3000);

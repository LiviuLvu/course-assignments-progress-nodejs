const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const rootDirPath = require('./util/root-module-path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDirPath, 'public')));
app.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDirPath, 'views', 'users.html'));
});
app.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDirPath, 'views', 'home.html'));
});

app.listen(3000);

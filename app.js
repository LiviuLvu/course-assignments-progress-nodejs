const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const rootDirPath = require('./util/root-module-path');

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDirPath, 'public')));
app.get('/users', (req, res, next) => {
  res.render(
    path.join(rootDirPath, 'views', 'users.ejs'),
    {
      title: 'Users Page',
      users: users
    }
  );
});
app.get('/', (req, res, next) => {
  res.render(
    path.join(rootDirPath, 'views', 'home.ejs'),
    {
      title: 'Home Page'
    }
  );
});
app.post('/', (req, res, next) => {
  users.push(req.body.name);
  res.redirect('/users');
});

app.listen(3000);

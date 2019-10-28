
const express = require('express');
const people = require('./people.json');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});


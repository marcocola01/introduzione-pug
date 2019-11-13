const express = require('express');
const lego = require('./lego.json');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
   title: 'Scegli il tuo Lego:',
   people: people.profiles,
   content : 'Questa pagina parla del mondo e di tanto altro'
 });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
const express = require('express');
const modello = require('./lego.json');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
   title: 'Scegli il tuo Lego:',
   modello: modello.profiles,
   content : 'Questa pagina parla del mondo e di tanto altro'
 });
});

app.get('/modello', (req, res) => {
  const m = modello.profiles.find((p) => p.SetNumber === req.query.SetNumber);
  //console.log(JSON.stringify(m));
  res.render('modello', {
    title: `About ${m.SetNumber}`,
    m,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
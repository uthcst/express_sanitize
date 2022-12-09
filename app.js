const express = require('express');
const port = process.env.port || 4000;
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/css', express.static('css'));
app.get('/', (request, response) => {
    response.render('index', {
      subject: 'Pug template engine',
      name: 'Pug Example',
      link: 'http://cs.uth.gr'
    });
  });
app.get("")
app.listen(port, function () {
    console.log('Server is running at ', port);
});
const express = require('express');
const hb = require('express-handlebars');

const routing = require('./routing/index.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routing);

app.listen(PORT, function () {
    console.log(`running on ${PORT}`);
});

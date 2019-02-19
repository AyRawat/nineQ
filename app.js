var express = require('express');
var controller = require('./controllers/controllerFile');
var app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public/assets')));

app.listen(4000);
console.log('listening@4k');

controller(app);

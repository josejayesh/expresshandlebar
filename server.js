var express = require('express');
var exphbs = require('express-handlebars');
var hbs = require("hbs")
hbs.registerHelper("equal", require("handlebars-helper-equal"))
var app=express();
var index = require('./router/index');
var city = require('./router/city');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));;
app.engine('handlebars', exphbs({defaultLayout:'html'}));
app.get('/', index.index);
app.get('/:city',city.city);
var port = process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log('Server is started at http://localhost: powered by handlebar'+port);
});

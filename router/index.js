exports.index=function(req,res){
  var data = require('../index.json');
  res.render('home', {
    'data' : data,
  });
}

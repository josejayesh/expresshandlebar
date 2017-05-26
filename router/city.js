exports.city=function(req,res){
  var data = require('../city.json');
  var city = req.params.city;
  var key = data.router.indexOf(city);
  if (key>=0){
    res.render('home', {
      'data' : data.city[city]
    });
  }
  else{
    res.status(404).send('404: Page you are looking for is moved out from this webserver.')
  }
}

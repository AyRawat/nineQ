var bodyParser = require('body-parser');
var obj={
  head1:'START PROJECT',
  head2:'START WITH YOUR IDEA',
  head3:'SPECIFY A TIMELINE AND A ZONE',
  head4:'PERSONALIZE YOUR PRODUCT\'S FEATURES'
};
module.exports = (app)=>{
app.get('/home', function(req,res){
  res.render('home');
});
app.get('/services', function(req,res){
  res.render('services');
});
app.get('/NonProfits', (req,res)=>{
  res.render('NonProfits');
});
}

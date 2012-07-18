
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'paulgrock.com | about'
  });
});

app.get('/about', function(req, res){
  res.render('index', {
    title: 'paulgrock.com | about'
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: 'paulgrock.com | contact'
  });
});

app.get('/showcase', function(req, res){
  res.render('showcase', {
    title: 'paulgrock.com | showcase'
  });
});
app.get('/blog', function(req, res){
  res.render('blog', {
    title: 'paulgrock.com | blog'
  });
});

app.get('/skills', function(req, res){
  res.render('skills', {
    title: 'paulgrock.com | skills'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);


require("coffee-script");

var express = require("express")
  , less = require("less")
  , less4clients = require("less4clients")
  , app = module.exports = express.createServer();

app.configure(function(){
  app.set("views", __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + "/public"));
  app.use(app.router);
  less4clients.createInstance({server: app, publicPath: __dirname + "/public/stylesheets", compress: true});
});

app.configure("development", function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure("production", function(){
  app.use(express.errorHandler()); 
});

app.get("/", function(request,response){response.render("index",{});});

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

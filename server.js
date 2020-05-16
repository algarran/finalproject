var express = require("express");


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jordan923',
  database : 'villagers_db'
});

var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
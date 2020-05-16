var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./client/src/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
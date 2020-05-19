var express = require("express");
var mysql = require("mysql");
var app = express();
var db = require("./models");
var PORT = process.env.PORT || 3001;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password:"yourRootPassword",
  database: "villagers_db"
});

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/villagers", function(req, res) {
  db.Villagers.findAll({}).then(function(dbVillager) {
    res.json(dbVillager);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
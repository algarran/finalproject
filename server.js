var express = require("express");

<<<<<<< HEAD
=======

var connection = mysql.createConnection({
  host     : 'localhost',
  // port: 3306,
  user     : 'root',
  password : 'Jordan923',
  database : 'villagers_db'
});

>>>>>>> 9c0450d9af95ffe276f90d2a93f1710ae2046df2
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
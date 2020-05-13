const mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourRootPassword',
  database : 'villager_db'
});
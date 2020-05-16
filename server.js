const mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Jordan923',
  database : 'villagers_db'
});

connection.connect(function(err){
  if(!err){
    console.log(`Connected to database thread: ${connection.threadId}`);
  }
});

connection.query("SELECT * FROM villagers", function(err, res){
  if(err) throw err;
  res.forEach(txt=>{
      console.log(`Name: ${txt.villager_name} bithday: ${txt.villager_birthday}`);
  });
});
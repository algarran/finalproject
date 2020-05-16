var mysql = require("mysql");
var express = require("express");
import React from "react";

var app = express();

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password:"Jordan923",
  database: "villagers_db"
});

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

function EditVillager() {
  // insert FOR loop here.
  app.get("/", function (req, res) {
    connection.query("SELECT * FROM villagers", function (err, result){
      if (err) throw err;
      var html = "<h1> Search for a Villager </h1>";
  
      html += "<ul>";
  
      for (var i = 0; i < result.length; i++){
        html += "<li><p> " + result[i].villager_name + "</p>";
        html +="<p> " + result[i].villager_birthday + "</p>";
  
      }
      html += "</ul>";
  
      res.send(html);
  
      });
  });
  return (
    <div>
      <div>
        <div>
          <h2>Add Your Villagers!</h2>
        </div>
        <div className="searchBox">
          <input className="input" type="text" placeholder="Search For a Villager"/>
        </div>
        <div className="searchBtn">
          <button className="button">Search</button>
          <a href="/calendar" className="button">Calendar</a>
        </div>
      </div>
      <div id="agrippa"></div>
    </div>
  );
}

export default EditVillager;
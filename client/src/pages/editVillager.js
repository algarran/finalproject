import React from "react";
var mysql = require("mysql");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

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

function EditVillager() {
  var db = require("../models/villagers");
  console.log(db());
  // insert FOR loop here.
  app.get("/", function (req, res) {
    connection.query("SELECT * FROM villagers", function (err, result){
      if (err) throw err;
  
      var html = "<ul>";
  
      for (var i = 0; i < result.length; i++){
        html += "<li><p> " + result[i].villager_name + "</p>";
        html +="<p> " + result[i].villager_birthday + "</p></li>";
  
      }
      html += "</ul>";
  
      var agrippa = document.getElementById("agrippa");
      agrippa.appendChild(html);
  
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
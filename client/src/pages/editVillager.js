var mysql = require("mysql");
var express = require("express");
import React from "react";

var app = express();

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port:
  user: "",
  password:"",
  database: "villagers_db"
});

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});
app.get("/", function (req, res) {
  connection.query()
})
function EditVillager() {
  // insert FOR loop here.
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
          <a href="login.html" className="button">Link Button</a>
        </div>
      </div>
      <h2>VILLAGERS</h2>
      <div id="agrippa"></div>
    </div>
  );
}

export default EditVillager;
import React from "react";

function EditVillager() {
  var db = require("../../../models/villagers");
  // insert FOR loop here.
  for(var i = 0; i > 391; i++) {
    console.log(db[i]);
  }
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
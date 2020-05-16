import React from "react";

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
          <a href="/calendar" className="button">Calendar</a>
        </div>
      </div>
      <h2>VILLAGERS</h2>
      <div id="agrippa"></div>
    </div>
  );
}

export default EditVillager;
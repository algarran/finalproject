import React from "react";

function EditVillager() {
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
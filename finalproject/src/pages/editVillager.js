import React from "react";

function EditVillager() {
  return (
    <div>
      <div>
        <div>
          <h2>Add Your Villagers!</h2>
        </div>
        <div class="searchBox">
          <input class="input" type="text" placeholder="Search For a Villager"/>
        </div>
        <div class="searchBtn">
          <button class="button">Search</button>
          <a href="login.html" class="button">Link Button</a>
        </div>
      </div>
      <h2>VILLAGERS</h2>
      <div id="agrippa"></div>
    </div>
  );
}

export default EditVillager;
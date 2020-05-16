const {Sequelize} = require('sequelize');
const database = new Sequelize({
  dialect: 'sqlite'
});

var Villagers = database.define("Villagers", {
  villager_name: Sequilize.STRING,
  villager_species: Sequilize.STRING,
  villager_gender: Sequilize.STRING,
  villager_personality: Sequilize.STRING,
  villager_birthday: Sequilize.STRING,
  villager_style_aleph: Sequilize.STRING,
  villager_style_beth: Sequilize.STRING
});

export default Villagers;
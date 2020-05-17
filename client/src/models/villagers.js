const {Sequelize} = require('sequelize');
const database = new Sequelize({
  dialect: 'sqlite'
});

var Villagers = database.define("Villagers", {
  villager_name: Sequelize.STRING,
  villager_species: Sequelize.STRING,
  villager_gender: Sequelize.STRING,
  villager_personality: Sequelize.STRING,
  villager_birthday: Sequelize.STRING,
  villager_style_aleph: Sequelize.STRING,
  villager_style_beth: Sequelize.STRING
});

export default Villagers;
module.exports = function(sequelize, DataTypes) {
  var Villagers = sequelize.define("Todo", {
    villager_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_species: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_personality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_style_aleph: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_style_beth: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Villagers;
};
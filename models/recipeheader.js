'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeHeader extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeHeader.belongsTo(models.User, { foreignKey: "userId" });
      RecipeHeader.belongsTo(models.RecipeCategories, { foreignKey: "categoryId" });
      RecipeHeader.hasMany(models.RecipeDetails, { foreignKey: "recipeId" });
    }
  };
  RecipeHeader.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipeHeader',
  });
  return RecipeHeader;
};
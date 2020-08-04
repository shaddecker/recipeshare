'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RecipeDetails.belongsTo(models.RecipeHeader, { foreignKey: "id" });
    }
  };
  RecipeDetails.init({
    recipeId: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
    measure: DataTypes.STRING,
    ingredient: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipeDetails',
  });
  return RecipeDetails;
};
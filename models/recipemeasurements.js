'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeMeasurements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  RecipeMeasurements.init({
    measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecipeMeasurements',
  });
  return RecipeMeasurements;
};
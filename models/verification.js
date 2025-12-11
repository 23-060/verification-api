'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Verification.init({
    reportId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    proof: DataTypes.STRING,
    status: DataTypes.STRING,
    adminNote: DataTypes.TEXT,
    adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Verification',
  });
  return Verification;
};
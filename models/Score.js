const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Score extends Model {}

Score.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    lose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },

    score_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'score',
  }
);

module.exports = Score;

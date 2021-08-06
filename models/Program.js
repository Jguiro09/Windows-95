const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Program extends Model {}

Program.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50],
      },
    },

    img_src: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50],
      },
    },
    
    html_file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'program',
  }
);

module.exports = Program;

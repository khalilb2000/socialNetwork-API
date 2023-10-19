const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class email extends Model {}

email.init(
    {
    //defining 'id'
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    email_name:{
        type: DataTypes.STRING,
    },
},
{
    sequalize,
    timestamps: true,
    freeTableName: true,
    underscored: true,
    modelName: 'category',
  }

);

module.exports = email;
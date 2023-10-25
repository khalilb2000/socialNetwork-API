const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Email extends Model {}

Email.init(
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
    sequelize,
    timestamps: true,
    freeTableName: true,
    underscored: true,
    modelName: 'category',
  }

);

module.exports = Email;
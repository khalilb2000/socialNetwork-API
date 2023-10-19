const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
class Thoughts extends Model {}

Thoughts.init({
    id:{
    type: DataTypes.STRING, // String DataType
    allowNull: false,
    primartKey: true,
    }
    

})
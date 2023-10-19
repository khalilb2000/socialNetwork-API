const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
class Thoughts extends Model {}

Thoughts.init({
    id:{
    type: DataTypes.STRING, // String DataType
    allowNull: false,
    primartKey: true,
    },

    user_id:{
        type: DataType.STRING,
        allowNull: false,
        model:'user'
    },

});

module.exports = Thoughts;
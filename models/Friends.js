const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Friends extends Model {}

Friends.init({
    id:{
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
    },

    friends_name:{
        type: DataType.String,
        allowNull: false,
        primaryKey: true,
}
});

module.exports = Friends;
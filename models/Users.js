const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Thoughts = require('./Thoughts');

class Users extends Model{}

Users.init({
    id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        

    }
})

module.exports = Users;
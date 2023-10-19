const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class friends extends Model {}

friends.init({
//defining friends id

id: {
    Type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement:true,
},

friends_name: {
    allowNull:false,
    Type: DataType.STRING,
},
friend_count:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
        isNumeric: true,
    }
}
 
},
{
    sequelize,
    timestamps: false, 
    freezeTableName: true, 
    uderscored: true,
    modelName: 'friends'
}
);

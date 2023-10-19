const email = require('./Email');
const friends = require('/friends');
const thoughts = require('./Thoughts');
const user = require('./Users');

//friends belongs to user
friends.belongsTo(user,{
    foreignKey: 'user_id',
});
//user has many friends
friends.belongsToMany(friends,{
    foreignKey: 'friends_id',
});

module.exports = {
    email,
    friends,
    user,
    thoughts,
};
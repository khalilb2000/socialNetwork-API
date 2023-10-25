const Email = require('./Email');
const Friends = require('./Friends');
const Thoughts = require('./Thoughts');
const User = require('./Users');

//friends belongs to user
Friends.belongsTo(User,{
    foreignKey: 'user_id',
});
//user has many friends
User.hasmany(Friends, {
    foreignKey: 'uder_id',
});
//thoughts belongs to user
Thoughts.belongsTo(User,{
    foreignKey: 'user_id' });

module.exports = {
    User,
    Thoughts,
    Email,
    Friends,

}
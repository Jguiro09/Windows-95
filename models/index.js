const User = require('./User');
const Score = require('./Score');
const Sent = require('./Sent');

// User_id between Score and User
Score.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
User.hasMany(Score, {
  foreignKey: 'user_id',
});

Sent.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Sent, {
  foreignKey: 'user_id',
});

module.exports = { User, Score, Sent };

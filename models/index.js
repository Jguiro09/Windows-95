const User = require('./User');
const Score = require('./Score');
const Note = require('./Note');

// User_id between Score and User
Score.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Note.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Score, {
  foreignKey: 'user_id',
});

module.exports = { User, Score, Note };

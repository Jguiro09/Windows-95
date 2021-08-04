const { Score } = require('../models');

const scoredata = [
  {
    id: 1,
    win: 4,
    lose: 0,
    user_id: 1,
  },
  {
    id: 2,
    win: 0,
    lose: 10,
    user_id: 2,
  },
  {
    id: 3,
    win: 50,
    lose: 1,
    user_id: 3,
  },
];

const seedScore= () => Score.bulkCreate(scoredata);

module.exports = seedScore;

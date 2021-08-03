const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: "SlapNutMagoos",
    password: "table",
  },
  {
    id: 2,
    username: "Guiro",
    password: "Password",
  },
  {
    id: 3,
    username: 'Evano',
    password: 'root',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

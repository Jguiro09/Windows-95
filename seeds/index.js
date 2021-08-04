const sequelize = require('../config/connection');
const seedUser = require('./UserData');
const seedSent = require('./SentData');
const seedScore = require('./ScoreData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedSent();
  
  await seedScore();

  process.exit(0);
};

seedAll();

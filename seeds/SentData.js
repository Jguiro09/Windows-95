const { Sent } = require('../models');

const sentdata = [
  {
    id: 1,
    title: "Github",
    recipent: "SlapNutMagoos",
    body: "Create a Staging Branch in Git with your name and clone the latest repo",
    user_id: 2,
  },
  {
    id: 2,
    title: "IOS 15",
    recipent: "Evano",
    body: "The new IOS 15 beta is great, you should sign up for it. ",
    user_id: 1,
  },
  {
    id: 3,
    title: "Windows 95 X",
    recipent: "Guiro",
    body: "The X for Windows 95 does not exist in PNG form.",
    user_id: 2,
  }
];

const seedSent= () => Sent.bulkCreate(sentdata);

module.exports = seedSent;

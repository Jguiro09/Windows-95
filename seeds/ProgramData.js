const { Program } = require('../models');

const programdata = [
  {
    id: 1,
    title: "Snake",
    img_src: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49284/preview.svg',
    html_file: "./snake/snake.html",
  },
  {
    id: 2,
    title: "MineSweeper",
    img_src: 'https://styles.redditmedia.com/t5_2r4c3/styles/communityIcon_whz4tmbb4w061.png?width=256&s=b0bf76406b2241c3e6b2126a7cac31941619e94d',
    html_file: "./minesweeper.html",
  },
  {
    //Width 50
    id: 3,
    title: "Pong",
    img_src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ba9c676-afd3-4a71-8012-4f144cc6a7ac/d3bm9m6-13a5586d-965b-4c11-a3cb-ba2e00079d3a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiYTljNjc2LWFmZDMtNGE3MS04MDEyLTRmMTQ0Y2M2YTdhY1wvZDNibTltNi0xM2E1NTg2ZC05NjViLTRjMTEtYTNjYi1iYTJlMDAwNzlkM2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Fmg_-myIFcwMSStoGokiErDEW1XAKWLaXzsLDu0Fuhc',
    html_file: "./snake/snake.html",
  },
  {
      //Width 50
    id: 4,
    title: "Oregon Trail",
    img_src: 'https://img.pngio.com/oregon-trail-award-winning-ios-game-for-children-oregon-trail-png-201_201.png',
    html_file: 1,
  },
];

const seedProgram= () => Program.bulkCreate(programdata);

module.exports = seedProgram;

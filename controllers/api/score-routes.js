const router = require('express').Router();
const { Score } = require('../../models');
const { update } = require('../../models/User');

// CREATE new Score
router.get('/', async(req, res) => {
  try {
    const allScore = await Score.findAll();
    res.status(200).json(allScore);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findScore = await Score.findByPk(req.params.id);
    res.status(200).json(findScore);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    console.log(req.session.user_id)
    const newScore = await Score.create({
      score: req.body.finalScore,
      user_id: req.session.user_id,
      game_id: req.body.game_id,
    });
    res.status(200).json(newScore);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const updateScore = await Score.update(
      {
        score: req.body.finalScore
      },
      {
      where: {
        game_id: req.body.game_id,
        user_id: req.session.user_id,
      },
    });

    req.session.save(() => {
      res.status(200).json(updateScore);
  })
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/', (req, res) => {
  try {
    const deleted = Score.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleted);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;

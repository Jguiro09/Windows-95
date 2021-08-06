const router = require('express').Router();
const { Score } = require('../../models');

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
    const newScore = await Score.create(req.body);
    res.status(200).json(newScore);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const updateScore = Score.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateScore);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
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

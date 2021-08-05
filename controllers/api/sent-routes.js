const router = require('express').Router();
const { Sent } = require('../../models');

// The `/api/sent` endpoint

router.get('/', async(req, res) => {
  try {
    const allSent = await Sent.findAll();
    res.status(200).json(allSent);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findSent = await Sent.findByPk(req.params.id);
    res.status(200).json(findSent);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newSent = await Sent.create(req.body);
    res.status(200).json(newSent);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const updateSent = Sent.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateSent);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deleted = Sent.destroy({
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

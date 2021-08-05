const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.get('/', async(req, res) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    res.status(200).json(findUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const updateUser = User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deleted = User.destroy({
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

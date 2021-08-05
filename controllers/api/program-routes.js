const router = require('express').Router();
const { Program } = require('../../models');

// CREATE new Program
router.get('/', async(req, res) => {
  try {
    const allProgram = await Program.findAll();
    res.status(200).json(allProgram);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findProgram = await Program.findByPk(req.params.id);
    res.status(200).json(findProgram);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newProgram = await Program.create(req.body);
    res.status(200).json(newProgram);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const updateProgram = Program.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateProgram);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deleted = Program.destroy({
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

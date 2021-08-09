const router = require('express').Router();
const { Note } = require('../../models');

// The `/api/note` endpoint

router.get('/', async (req, res) => {
  try {
    const note = await Note.findOne({
      where: {
        user_id: req.session.user_id
      }
    });
    res.status(200).json(note);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    console.log(req.body)
    const updateNote   = await Note.update({
      body: req.body.body,
    }, {
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(updateNote);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

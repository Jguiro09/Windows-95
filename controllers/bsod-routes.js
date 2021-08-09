const router = require('express').Router();
const { User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', withAuth, async (req, res) => {
try {
    res.render('bsod', {});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', withAuth, async (req, res) => {
    res.render('desktop');
});

router.get('/login', (req, res) => {

});

router.get('/snake', (req, res) => {
    res.render('snake')
});
router.get('/minesweeper', (req, res) => {
    res.render('minesweeper')
});

module.exports = router;

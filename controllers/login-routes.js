const router = require('express').Router();
const { User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;

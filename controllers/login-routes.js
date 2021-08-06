const router = require('express').Router();
const { User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');
});


router.get('/gallery/:id', withAuth, async (req, res) => {

});


router.get('/painting/:id', withAuth, async (req, res) => {

});

module.exports = router;

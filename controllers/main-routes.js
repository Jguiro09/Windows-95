const router = require('express').Router();
const { User, Score, Note } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', withAuth, async (req, res) => {
    res.render('desktop');
});

router.get('/user', async (req, res) => {
    let name = await User.findOne({
        where: {
            id: req.session.user_id,
        }
    });

    let snake = await Score.findOne({
        where: {
            game_id: 1,
            user_id: req.session.user_id
        }
    })

    let minesweeper = await Score.findOne({
        where: {
            game_id: 2,
            user_id: req.session.user_id
        }
    })
    console.log(name);
    console.log(snake);
    res.render('user', {name, snake, minesweeper});
});

router.get('/snake', (req, res) => {
    res.render('snake')
});

router.get('/minesweeper', (req, res) => {
    res.render('minesweeper');
});

router.get('/pong', (req, res) => {
    res.render('pong');
});

router.get('/trail', (req, res) => {
    res.render('trail');
});

router.get('/note', async (req,res) => {
    let userNote = await Note.findOne({
        where: {
            user_id: req.session.user_id
        }
    })

    console.log(userNote)
    res.render('note', {userNote})
})

module.exports = router;

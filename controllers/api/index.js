const router = require('express').Router();
const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());

const userRoutes = require('./user-routes');
const scoreRoutes = require('./score-routes');
const noteRoutes = require('./note-routes');


router.use('/users', userRoutes);
router.use('/score', scoreRoutes);
router.use('/note', noteRoutes);


module.exports = router;
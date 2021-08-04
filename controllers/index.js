const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./login-routes.js');
const mainRoutes = require('./main-routes.js');
const BSODRoutes = require('./bsod-routes.js');

router.use('/login', loginRoutes);
router.use('/', mainRoutes);
router.use('/BSOD', BSODRoutes);
router.use('/api', apiRoutes);

module.exports = router;
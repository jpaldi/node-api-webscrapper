var router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('API Endpoints');
});

router.use('/players', require('./players'));
router.use('/teams', require('./teams'));


module.exports = router;
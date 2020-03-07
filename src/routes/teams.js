
var router = require('express').Router();

router.get('/', function(req, res, next) {
    res.send('teams endpoints');
});

module.exports = router;
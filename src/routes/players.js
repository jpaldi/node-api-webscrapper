mongoose  = require('mongoose');
mongoose.connect('mongodb://mongo:27017/appdb');

const models = require("../models/models");
let router = require('express').Router();

let routes = {
   "/getAllPlayers": "Get All players",
   "/getPlayers?teamid=x" : "Get players for the team with id: x",
};

router.get('/', function(req, res, next) {
    res.send(JSON.stringify(routes));
});

router.get('/getAllPlayers', function(req, res, next) {
    models.Players.find({}, function(err, docs) {
        if (!err){
            res.send(JSON.stringify(docs));
        } else {throw err;}
    });
});


router.get('/getPlayers', function(req, res, next) {
    const teamid = req.query.teamid;

    models.Players.find({teamid: teamid}, function(err, docs) {
        if (!err){
            res.send(JSON.stringify(docs));
        } else {throw err;}
    });
});

module.exports = router;
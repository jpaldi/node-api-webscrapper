const Promise = require("bluebird");
const mongoose = require("mongoose");
const models = require("../models/models");

mongoose.Promise = Promise;

function go() {
    mongoose.connect('mongodb://localhost:27017/appdb');

    let db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log("Connection Successful!");

        // documents to add
        var sport1 = new models.Sports({name: "Basketball", id: 1});
        var sport2 = new models.Sports({name: "Football", id: 1});
        var player1 = new models.Players({name: 'Arnaldo', teamid: 1});
        var team1 = new models.Teams({id: 1, name: "Barreirense Basket", sportid: 1});
        var team2 = new models.Teams({id: 2, name: "Juventude Sport Clube", sportid: 2});

        Promise.all([sport1.save, team1.save(), sport2.save(), player1.save(), team2.save()])
            .then(() => {
                console.log("Successfully loaded 5 Documents to the DB");
                mongoose.disconnect();
            })
            .catch((e) => {
                console.log(e.message);
                mongoose.disconnect();
            })
    });
}

go();

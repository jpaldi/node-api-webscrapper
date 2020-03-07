const rp = require('request-promise');
const cheerio = require('cheerio');
const mongoose = require("mongoose");
const models = require("../models/models");

mongoose.Promise = Promise;

function go() {
    mongoose.connect('mongodb://localhost:27017/appdb');
    let db = mongoose.connection;

    const options = {
        // This will load Juventude Sport Clube Staff for Season 15/16
        uri: `http://www.zerozero.pt/equipa.php?id=3594&epoca_id=145`,
        transform: function (body) {
            return cheerio.load(body, { decodeEntities: true });
        }
    };


    db.once('open', function () {
        rp(options)
            .then(($) => {
                let promises = [];

                $('.staff_line .text').each(function () {
                    let player = new models.Players({name: $(this).text(), teamid: 2});
                    promises.push(player.save());
                });

                Promise.all(promises).then(()=>{
                    console.log("Players created");
                    mongoose.disconnect();
                })
            })
            .catch((err) => {
                mongoose.disconnect();
            });
    });

}

go();
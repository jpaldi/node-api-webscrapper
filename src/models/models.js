const mongoose = require("mongoose");

const PlayersSchema = mongoose.Schema({
    name: String,
    teamid: Number
});

const TeamsSchema = mongoose.Schema({
    id: Number,
    sportid: Number,
    name: String
});

const SportsSchema = mongoose.Schema({
    name: String,
    id: Number
});

const Players = mongoose.model('players', PlayersSchema, 'players');
const Teams = mongoose.model('teams', TeamsSchema, 'teams');
const Sports = mongoose.model('sports', SportsSchema, 'sports');

exports.Players = Players;
exports.Teams = Teams;
exports.Sports = Sports;
# node + express + docker + mongodb + web scrapper 

This is a simple node express server + mongodb that run in Docker containers.


Instructions: 

1) Run Server and Database Containers :
> docker-compose build && docker-compose up

2) Run initial-load.js, which loads a few documents to the db.

> node src/scripts/initial-load.js 

3) Run node src/scripts/load-jsc-players-from-zerozero.js files, which reads the zerozero page and populates the database players collections with the Juventude Sport Clube players season 2015/2016

> node src/scripts/load-jsc-players-from-zerozero.js

4)  Use the API. Implemented routes:

> /getAllPlayers - Get All players
> /getPlayers?teamid=x - Get players for the team with id: x


E.g:

> $ curl -X GET http://localhost:3000/api/players/getPlayers?teamid=1

returns

```[{"_id":"5c22802ac1eb1b2e48d010ad","name":"Arnaldo","teamid":1,"__v":0}]```
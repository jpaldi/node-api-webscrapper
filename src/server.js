const app = require('express')();

app.get('/', (req, res, next) => {
    res.send('Hello Node + MongoDB Dockerized app!');
});

app.use('/api', require('./routes/routes'));

app.listen(3000, () => console.log('Server running'));

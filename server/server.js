const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const chestRouter = require('./routes/chest.router');
const shouldersRouter = require('./routes/shoulders.router');
const legsRouter = require('./routes/legs.router');
const coreRouter = require('./routes/core.router')
const cstRouter = require('./routes/cst.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.use('/chest', chestRouter);
app.use('/shoulders', shouldersRouter);
app.use('/legs', legsRouter);
app.use ('/core', coreRouter);
app.use('/cst', cstRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
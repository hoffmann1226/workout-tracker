const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log ('in cst router')
    const queryText = 'SELECT * FROM cst';
    pool.query (queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error getting cst', err);
            res.sendStatus(500);
        });
});

module.exports = router;
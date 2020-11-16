const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('in core router')
    const queryText = 'SELECT * FROM core';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error getting core', err);
        res.sendStatus(500);
      });
  });

 

  module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in shoulders router')
    const queryText = 'SELECT * FROM shoulders';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error getting chest', err);
        res.sendStatus(500);
      });
  });

 

  module.exports = router;
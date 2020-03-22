const express = require('express');
const router = express.Router();
const { Actor } = require('../models/Actor');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Actor.findAll()
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
});


module.exports = router;
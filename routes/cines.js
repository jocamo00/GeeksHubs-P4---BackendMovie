const express = require('express');
const router = express.Router();
const { Cine } = require('../models/Cine');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Cine.findAll()
    .then( cines => res.json(cines))
    .catch( err => res.json({ msn: err }))
});


module.exports = router;
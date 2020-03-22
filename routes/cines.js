const express = require('express');
const router = express.Router();
const { Cine } = require('../models/Cine');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Cine.findAll()
    .then( cines => res.json(cines))
    .catch( err => res.json({ msn: err }))
});


router.get('/:id', (req, res) => {
  let _id = req.params.id
  Cine.findAll({ where: { id: _id }}).then( cines => {
      res.json(cines);
  });
});


module.exports = router;
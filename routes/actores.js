const express = require('express');
const router = express.Router();
const { Actor } = require('../models/Actor');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Actor.findAll()
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
});


router.get('/:id', (req, res) => {
  let _id = req.params.id
  Actor.findAll({ where: { id: _id }}).then( actores => {
      res.json(actores);
  });
});


module.exports = router;
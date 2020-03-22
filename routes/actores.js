const express = require('express');
const router = express.Router();
const { Actor } = require('../models/Actor');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Actor.findAll()
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
});


router.get('/id/:id', (req, res) => {
  let _id = req.params.id
  Actor.findAll({ where: { id: _id }}).then( actores => {
      res.json(actores);
  });
}); 


router.get('/:nombre', (req, res) => {
  let _nombre = req.params.nombre
  Actor.findAll({ where: { nombre: _nombre }}).then( actores => {
      res.json(actores);
  });
}); 


module.exports = router;
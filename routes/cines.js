const express = require('express');
const router = express.Router();
const { Cine } = require('../models/Cine');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Cine.findAll()
    .then( cines => res.json(cines))
    .catch( err => res.json({ msn: err }))
});


router.get('/id/:id', (req, res) => {
  let _id = req.params.id
  Cine.findAll({ where: { id: _id }}).then( cines => {
      res.json(cines);
  });
});


router.get('/:nombre', (req, res) => {
  let _nombre = req.params.nombre
  Cine.findAll({ where: { nombre: _nombre }}).then( cines => {
      res.json(cines);
  });
}); 


router.get('/provincia/:provincia', (req, res) => {
  let _provincia = req.params.provincia
  Cine.findAll({ where: { provincia: _provincia }}).then( cines => {
      res.json(cines);
  });
}); 



module.exports = router;
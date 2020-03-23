const express = require('express');
const router = express.Router();
const { Cine } = require('../models/Cine');

// Listar todos los cines
router.get('/', (req, res, next) => {
  Cine.findAll()
    .then( cines => res.json(cines))
    .catch( err => res.json({ msn: err }))
});


// Filtrar cine por id
router.get('/id/:id', (req, res) => {
  let _id = req.params.id
  Cine.findAll({ where: { id: _id }}).then( cines => {
      res.json(cines);
  });
});


// Filtrar cine por nombre
router.get('/:nombre', (req, res) => {
  let _nombre = req.params.nombre
  Cine.findAll({ where: { nombre: _nombre }}).then( cines => {
      res.json(cines);
  });
}); 


// Filtrar cine por provincia
router.get('/provincia/:provincia', (req, res) => {
  let _provincia = req.params.provincia
  Cine.findAll({ where: { provincia: _provincia }}).then( cines => {
      res.json(cines);
  });
}); 


// Crear cine
router.post('/', (req, res)=> {
  Cine.create(
    { 
      nombre: req.body.nombre,
      provincia: req.body.provincia
    })
    .then( cines => res.json(cines))
    .catch( err => res.json({ msn: err }))
  });


module.exports = router;
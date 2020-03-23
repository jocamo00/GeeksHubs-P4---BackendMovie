const express = require('express');
const router = express.Router();
const { Actor } = require('../models/Actor');

// Listar todos los actores
router.get('/', (req, res, next) => {
  Actor.findAll()
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
});


// Filtrar actor por id
router.get('/id/:id', (req, res) => {
  let _id = req.params.id
  Actor.findAll({ where: { id: _id }}).then( actores => {
      res.json(actores);
  });
}); 


// Filtrar actor por nombre
router.get('/:nombre', (req, res) => {
  let _nombre = req.params.nombre
  Actor.findAll({ where: { nombre: _nombre }}).then( actores => {
      res.json(actores);
  });
}); 


// Filtrar actor por apellido
router.get('/apellido/:apellido', (req, res) => {
  let _apellido = req.params.apellido
  Actor.findAll({ where: { apellido: _apellido }}).then( actores => {
      res.json(actores);
  });
}); 


// Crear actor
router.post('/', (req, res)=> {
  Actor.create(
    { 
      nombre: req.body.nombre,
      apellido: req.body.apellido
    })
    .then( actores => res.json(actores))
    .catch( err => res.json({ msn: err }))
  });


module.exports = router;
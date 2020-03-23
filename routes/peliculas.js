const express = require('express');
const router = express.Router();
const { Pelicula } = require('../models/Pelicula');

// Listar todas las peliculas
router.get('/', (req, res, next) => {
  Pelicula.findAll()
    .then( peliculas => res.json(peliculas))
    .catch( err => res.json({ msn: err }))
});


// Filtar pelicula por id
router.get('/id/:id', (req, res) => {
  let _id = req.params.id
  Pelicula.findAll({ where: { id: _id }}).then( peliculas => {
      res.json(peliculas);
  });
}); 


// Filtrar pelicula por titulo
router.get('/:titulo', (req, res) => {
  let _titulo = req.params.titulo
  Pelicula.findAll({ where: { titulo: _titulo }}).then( peliculas => {
      res.json(peliculas);
  });
}); 


// Crear pelicula
router.post('/', (req, res)=> {
  Pelicula.create(
    { 
      titulo: req.body.titulo
    })
    .then( peliculas => res.json(peliculas))
    .catch( err => res.json({ msn: err }))
  });


module.exports = router;
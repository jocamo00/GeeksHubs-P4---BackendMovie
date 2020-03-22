const express = require('express');
const router = express.Router();
const { Pelicula } = require('../models/Pelicula');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Pelicula.findAll()
    .then( peliculas => res.json(peliculas))
    .catch( err => res.json({ msn: err }))
});


module.exports = router;
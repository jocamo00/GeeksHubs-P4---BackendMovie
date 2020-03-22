const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const faker = require('faker');
const times = require('lodash.times');


class Pelicula extends Sequelize.Model {}

Pelicula.init(
    {
        titulo: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'pelicula'
    });


Pelicula.sync({force: true})
    .then( () => {
        Pelicula.bulkCreate(
            times(30, () => ({
                titulo: faker.name.lastName()
            }))
        )
    });

    module.exports = { Pelicula }
const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const faker = require('faker');
const times = require('lodash.times');


class Actor extends Sequelize.Model {}

Actor.init(
    {
        nombre: { type: Sequelize.STRING },
        apellido: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'actor'
    });


Actor.sync({force: true})
    .then( () => {
        Actor.bulkCreate(
            times(30, () => ({
                nombre: faker.name.firstName(),
                apellido: faker.name.lastName()
            }))
        )
    });

    module.exports = { Actor }
const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const faker = require('faker');
const times = require('lodash.times');


class Cine extends Sequelize.Model {}

Cine.init(
    {
        nombre: { type: Sequelize.STRING },
        provincia: { type: Sequelize.STRING }
    },
    {
        sequelize,
        modelName: 'cine'
    });


Cine.sync({force: true})
    .then( () => {
        Cine.bulkCreate(
            times(30, () => ({
                nombre: faker.name.lastName(),
                provincia: faker.address.county()
            }))
        )
    });

    module.exports = { Cine }
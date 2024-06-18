'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('filme', [
      {
        titulo: 'Homem de Ferro',
        ano_lancamento: 2008,
        diretor: 'Jon Favreau',
        avaliacao: 7.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Os Vingadores',
        ano_lancamento: 2012,
        diretor: 'Joss Whedon',
        avaliacao: 8.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Guardiões da Galáxia',
        ano_lancamento: 2014,
        diretor: 'James Gunn',
        avaliacao: 8.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Pantera Negra',
        ano_lancamento: 2018,
        diretor: 'Ryan Coogler',
        avaliacao: 7.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Vingadores: Ultimato',
        ano_lancamento: 2019,
        diretor: 'Anthony Russo, Joe Russo',
        avaliacao: 8.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('filme', null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employmentType', [
      { name: 'Полная занятость' },
      { name: 'Частичная занятость' },
      { name: 'Проектная работа' },
      { name: 'Волонтерство' },
      { name: 'Стажировка' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employmentType', null, {});
  }
};
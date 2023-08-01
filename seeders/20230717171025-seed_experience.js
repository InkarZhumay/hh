module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Experiences', [
      { duration: 'Нет опыта' },
      { duration: 'от 1 года до 3 лет' },
      { duration: 'от 3 до 6 лет' },
      { duration: 'более 6 лет' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Experiences', null, {});
  }
};
const Country = require('../app/region/country')

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    const countries = await Country.findAll();
    
    // QueryInterface.Sequelize.query(
    //   'SELECT id FROM Countries;'
    // );

    const countryRows = countries;

    const citiesData = [
      //города России
      { name: 'Москва', countryId: countryRows[0].id},
      { name: 'Санкт-Петербург', countryId: countryRows[0].id},
      { name: 'Новосибирск', countryId: countryRows[0].id},
      { name: 'Екатеринбург', countryId: countryRows[0].id},
      { name: 'Казань', countryId: countryRows[0].id},
      { name: 'Нижний Новгород', countryId: countryRows[0].id},
      { name: 'Челябинск', countryId: countryRows[0].id},
      { name: 'Самара', countryId: countryRows[0].id},
      { name: 'Омск', countryId: countryRows[0].id},
      //города Украины
      { name: 'Киев', countryId: countryRows[1].id},
      { name: 'Харьков', countryId: countryRows[1].id},
      { name: 'Одесса', countryId: countryRows[1].id},
      { name: 'Днепр', countryId: countryRows[1].id},
      { name: 'Донецк', countryId: countryRows[1].id},
      //города 
      { name: 'Гомель', countryId: countryRows[2].id},
      { name: 'Могилев', countryId: countryRows[2].id},
      { name: 'Витебск', countryId: countryRows[2].id},
      { name: 'Гродно', countryId: countryRows[2].id},
      { name: 'Брест', countryId: countryRows[2].id},
      //города Казахстана
      { name: 'Нур-Султан', countryId: countryRows[3].id},
      { name: 'Шымкент', countryId: countryRows[3].id},
      { name: 'Караганда', countryId: countryRows[3].id},
      { name: 'Актобе', countryId: countryRows[3].id},
      { name: 'Тараз', countryId: countryRows[3].id},
      { name: 'Павлодар', countryId: countryRows[3].id},
      //города Армении
      { name: 'Ереван', countryId: countryRows[4].id},
      { name: 'Гюмри', countryId: countryRows[4].id},
      { name: 'Ванадзор', countryId: countryRows[4].id},
      { name: 'Армавир', countryId: countryRows[4].id},
      //города Армении
      { name: 'Баку', countryId: countryRows[5].id},
      { name: 'Гянджа', countryId: countryRows[5].id},
      //города 
      { name: 'Кутаиси', countryId: countryRows[6].id},
      { name: 'Батуми', countryId: countryRows[6].id},
      { name: 'Рустави', countryId: countryRows[6].id},
      //города Молдовы
      { name: 'Кишинев', countryId: countryRows[7].id},
      { name: 'Бельцы', countryId: countryRows[7].id},
      { name: 'Тирасполь', countryId: countryRows[7].id},
      { name: 'Бендеры', countryId: countryRows[7].id},
      //города Таджикистана
      { name: 'Душанбе', countryId: countryRows[8].id},
      { name: 'Худжанд', countryId: countryRows[8].id},
      { name: 'Куляб', countryId: countryRows[8].id},
      { name: 'Курган-Тюбе', countryId: countryRows[8].id},
      //города Туркменистана
      { name: 'Ашхабад', countryId: countryRows[9].id},
      { name: 'Туркменабад', countryId: countryRows[9].id},
      { name: 'Дашогуз', countryId: countryRows[9].id},
      { name: 'Мары', countryId: countryRows[9].id},
      //города Узбекистана
      { name: 'Ташкент', countryId: countryRows[10].id},
      { name: 'Самарканд', countryId: countryRows[10].id},
      { name: 'Наманган', countryId: countryRows[10].id},
      { name: 'Андижан', countryId: countryRows[10].id},
    ];

    await QueryInterface.bulkInsert('Cities', citiesData, {});
  },

  down: async (QueryInterface, sequelize) =>{
    await QueryInterface.bulkDelete('Cities', null, {});
  }

};
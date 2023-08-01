const Country = require('../app/region/country')

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    const Countries = await Country.findAll();
    
    // QueryInterface.Sequelize.query(
    //   'SELECT id FROM Countries;'
    // );

    const countryRows = countries;

    const citiesData = [
      //города России
      { name: 'Москва', countryID: countryRows[0].id},
      { name: 'Санкт-Петербург', countryID: countryRows[0].id},
      { name: 'Новосибирск', countryID: countryRows[0].id},
      { name: 'Екатеринбург', countryID: countryRows[0].id},
      { name: 'Казань', countryID: countryRows[0].id},
      { name: 'Нижний Новгород', countryID: countryRows[0].id},
      { name: 'Челябинск', countryID: countryRows[0].id},
      { name: 'Самара', countryID: countryRows[0].id},
      { name: 'Омск', countryID: countryRows[0].id},
      //города Украины
      { name: 'Киев', countryID: countryRows[1].id},
      { name: 'Харьков', countryID: countryRows[1].id},
      { name: 'Одесса', countryID: countryRows[1].id},
      { name: 'Днепр', countryID: countryRows[1].id},
      { name: 'Донецк', countryID: countryRows[1].id},
      //города 
      { name: 'Гомель', countryID: countryRows[2].id},
      { name: 'Могилев', countryID: countryRows[2].id},
      { name: 'Витебск', countryID: countryRows[2].id},
      { name: 'Гродно', countryID: countryRows[2].id},
      { name: 'Брест', countryID: countryRows[2].id},
      //города Казахстана
      { name: 'Нур-Султан', countryID: countryRows[3].id},
      { name: 'Шымкент', countryID: countryRows[3].id},
      { name: 'Караганда', countryID: countryRows[3].id},
      { name: 'Актобе', countryID: countryRows[3].id},
      { name: 'Тараз', countryID: countryRows[3].id},
      { name: 'Павлодар', countryID: countryRows[3].id},
      //города Армении
      { name: 'Ереван', countryID: countryRows[4].id},
      { name: 'Гюмри', countryID: countryRows[4].id},
      { name: 'Ванадзор', countryID: countryRows[4].id},
      { name: 'Армавир', countryID: countryRows[4].id},
      //города Армении
      { name: 'Баку', countryID: countryRows[5].id},
      { name: 'Гянджа', countryID: countryRows[5].id},
      //города 
      { name: 'Кутаиси', countryID: countryRows[6].id},
      { name: 'Батуми', countryID: countryRows[6].id},
      { name: 'Рустави', countryID: countryRows[6].id},
      //города Молдовы
      { name: 'Кишинев', countryID: countryRows[7].id},
      { name: 'Бельцы', countryID: countryRows[7].id},
      { name: 'Тирасполь', countryID: countryRows[7].id},
      { name: 'Бендеры', countryID: countryRows[7].id},
      //города Таджикистана
      { name: 'Душанбе', countryID: countryRows[8].id},
      { name: 'Худжанд', countryID: countryRows[8].id},
      { name: 'Куляб', countryID: countryRows[8].id},
      { name: 'Курган-Тюбе', countryID: countryRows[8].id},
      //города Туркменистана
      { name: 'Ашхабад', countryID: countryRows[9].id},
      { name: 'Туркменабад', countryID: countryRows[9].id},
      { name: 'Дашогуз', countryID: countryRows[9].id},
      { name: 'Мары', countryID: countryRows[9].id},
      //города Узбекистана
      { name: 'Ташкент', countryID: countryRows[10].id},
      { name: 'Самарканд', countryID: countryRows[10].id},
      { name: 'Наманган', countryID: countryRows[10].id},
      { name: 'Андижан', countryID: countryRows[10].id},
    ];

    await QueryInterface.bulkInsert('Cities', citiesData, {});
  },

  down: async (QueryInterface, sequelize) =>{
    await QueryInterface.bulkDelete('Cities', null, {});
  }

};
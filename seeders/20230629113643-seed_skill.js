module.exports = {
  up: async (queryInterface, Sequelize) =>{
    let skillsData = []
    const skills =[
      'Коммуникация',
      'Управление проектами',
      'Разработка программного обеспечения',
      'Аналитическое мышление',
      'Креативность',
      'Адаптабельность',
      'Лидерство',
      'Управление временем',
      'Продажи',
      'Клиентоориентированность',
      'Командная работа',
      'Навыки презентации',
      'Планирование и организация',
      'Анализ данных',
      'Написание кода',
      'Автоматизация процессов',
      'Работа с базами данных',
      'Визуализация данных',
      'Маркетинговые стратегии',
      'Разработка веб-приложений',
      'Управление рисками',
      'Управление изменениями',
      'Финансовая аналитика',
      'Администрирование систем',
      'Управление качеством',
      'Работа с большими данными',
      'Конфликтология',
      'Креативное мышление',
      'Межличностные навыки',
      'Анализ требований',
      'Мультимедиа-дизайн',
      'Стратегическое планирование',
      'Анализ рынка',
      'Пользовательское тестирование',
      'Инновационность',
      'Управление процессами',
      'Фронтенд-разработка',
      'Бэкенд-разработка',
      'Тестирование программного обеспечения',
      'Управление производством',
      'Управление командой',
      'Анализ бизнес-процессов',
      'Межкультурная коммуникация',
      'Ведение переговоров',
      'Разработка мобильных приложений',
      'Стратегическое мышление',
      'Анализ рисков',
      'Управление проектными рисками',
      'Копирайтинг',
      'Графический дизайн',
      'Управление запасами',
      'Управление бюджетом',
      'Аналитика в социальных сетях',
      'Брендинг',
      'Анализ конкурентов',
      'Управление продуктом',
      'Администрирование баз данных',
      'Оптимизация процессов',
      'Управление качеством продукта',
      'Анализ трендов',
      'Внутреннее предпринимательство',
      'Веб-дизайн',
      'Маркетинговый анализ',
      'Анализ ценообразования',
      'Программирование на Python',
      'Программирование на Java',
      'Программирование на JavaScript',
      'Программирование на C++',
      'Программирование на C#',
      'Программирование на PHP',
      'Аналитика в области здравоохранения',
      'Аналитика в области образования',
      'Виртуализация',
      'Управление активами',
      'Управление цепями поставок',
      'Управление данными',
      'Контент-маркетинг',
      'Поиск и анализ информации',
      'Анализ клиентов',
      'Управление информационной безопасностью',
      'Разработка игр',
      'Управление проектами в Agile',
      'Продуктовое планирование',
      'Управление коммуникациями',
      'Анализ процессов',
      'Визуальный дизайн',
      'Функциональное тестирование',
      'Управление услугами',
      'Аналитика в области финансов',
      'Разработка интерфейсов',
      'Анализ данных в области маркетинга',
      'Анализ данных в области финансов',
      'Программирование на Ruby',
      'Программирование на Swift',
      'Программирование на Go',
      'Программирование на Kotlin',
      'Программирование на Rust',
      'Программирование на TypeScript',
      'Аналитика в области продаж',
      'Управление проектами в Waterfall',
      'Управление портфелем проектов',
      'Управление конфликтами',
      'Анализ в области рекламы',
      'Маркетинговый анализ данных',
      'Пользовательский опыт (UX) дизайн',
      'Веб-разработка с использованием фреймворка React',
      'Веб-разработка с использованием фреймворка Angular',
      'Веб-разработка с использованием фреймворка Vue.js',
      'Разработка приложений на iOS',
      'Разработка приложений на Android',
      'Управление продуктовым портфелем',
      'Аналитика в области логистики',
      'Аналитика в области производства',
      'Управление облачной инфраструктурой',
      'Управление инновациями',
      'Аналитика в области туризма',
      'Аналитика в области энергетики',
      'Аналитика в области телекоммуникаций',
      'Управление проектами в IT',
      'Управление проектами в строительстве',
      'Управление проектами в маркетинге',
      'Управление проектами в финансах',
      'Управление проектами в здравоохранении',
      'Управление проектами в образовании',
      'Управление проектами в государственном секторе',
      'Управление проектами в производстве',
      'Управление проектами в логистике',
      'Управление проектами в телекоммуникациях',
      'Управление проектами в энергетике',
      'Управление проектами в туризме',
      'Управление проектами в сфере услуг',
      'Управление проектами в некоммерческих организациях',
      'Управление проектами в розничной торговле',
      'Аналитика в области биотехнологий',
      'Аналитика в области искусственного интеллекта',
      'Управление проектами в области биотехнологий',
      'Управление проектами в области искусственного интеллекта',
      'Аналитика в области кибербезопасности',
      'Управление проектами в области кибербезопасности',
      'Аналитика в области блокчейн-технологий',
      'Управление проектами в области блокчейн-технологий',
      'Аналитика в области интернета вещей',
      'Управление проектами в области интернета вещей',
      'Аналитика в области больших данных',
      'Управление проектами в области больших данных',
      'Аналитика в области машинного обучения',
      'Управление проектами в области машинного обучения',
      'Аналитика в области робототехники',
      'Управление проектами в области робототехники',
      'Аналитика в области виртуальной реальности'
    ];

    for (let i=0; i<skills.length; i++){
      skillsData.push({ name: skills[i] });
    }

    await queryInterface.bulkInsert('Skills', skillsData, {});
  },

  down:async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
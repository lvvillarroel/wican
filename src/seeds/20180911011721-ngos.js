const faker = require('faker'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  up(queryInterface) {
    const ngosData = [];
    for (let i = 0; i < 20; i += 1) {
      ngosData.push({
        name: faker.company.companyName(),
        logo: `https://loremflickr.com/320/240/logo?lock=${faker.random.number({ min: 1, max: 1000 })}`,
        email: faker.internet.email(),
        description: faker.lorem.sentences(5),
        website: faker.internet.url(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('ngos', ngosData);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('ngos', null, {});
  },
};

const faker = require('faker'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  up: queryInterface => queryInterface
    .bulkInsert(
      'users',
      Array(20).fill(undefined).map(() => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: faker.date.past(0.5, new Date(2017, 0, 1)),
        updatedAt: faker.date.past(0.5, new Date(2018, 0, 1)),
      })),
    ),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};

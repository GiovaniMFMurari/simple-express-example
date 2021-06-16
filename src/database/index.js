const { Sequelize, DataTypes } = require('sequelize');


const connection = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/database.sqlite'
});

const testConnection = async() => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const init = async () => await connection.sync({ force: false});

testConnection();
init();

module.exports = connection;

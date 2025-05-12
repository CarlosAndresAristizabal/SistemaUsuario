const { DataSource } = require('typeorm');
const path = require('path');
require('dotenv').config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: 3307,
  username: process.env.DB_USERNAME || 'user',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'user_system',
  entities: [path.join(__dirname, 'users/entities/*.js')],
  migrations: [path.join(__dirname, 'migrations/*.js')],
  synchronize: false,
  logging: true,
});

module.exports = AppDataSource;
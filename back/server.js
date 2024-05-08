const { Pool } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'dbthegarage',
  password: '123',
  port: 5432,
};

const pool = new Pool(config);

module.exports = pool;
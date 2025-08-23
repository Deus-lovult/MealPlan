require("dotenv").config();
const pg = require("pg");

//接続
const pgPool = new pg.Pool({
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const query = async (text, param) => {
  return await pgPool.query(text, param);
};

module.exports = { query, pgPool };

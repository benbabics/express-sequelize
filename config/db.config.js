module.exports = {
  HOST:     "localhost",
  DB:       process.env.DB_NAME,
  USER:     process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  dialect:  "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

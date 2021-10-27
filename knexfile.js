// Update with your config settings.
const knex = require("knex")

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mensajes.db3'
    }
  },
  useNullasdefault : true,

  pool: {min:2, max:8}
};

const dbMessage = knex(config.development)
module.exports = dbMessage;
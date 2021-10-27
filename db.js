const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "",
      database: "entregacoder",
    },
  
    pool: { min: 2, max: 8,  },
  });
  
  //Crear Tabla
  knex.schema
    .createTableIfNotExists("productos", function (table) {
      table.increments("id").primary();
      table.string("title");
      table.float("price");
      table.string("thumbnail");  
    })
    .then(() => {
      //console.log("Tabla Creada");
    })
    .catch((err) => {
      throw err;
    });
  
  module.exports = knex;
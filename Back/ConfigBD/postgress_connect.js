const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRESS_BANCODADOS,
  process.env.POSTGRESS_USER,
  process.env.POSTGRESS_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.POSTGRESS_HOST,
    port: process.env.POSTGRESS_PORT,
  }
);

(async () => {
  try {
    const resultado = await sequelize.sync();
    console.log("banco Postgres conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
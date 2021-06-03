const { DataTypes } = require("sequelize");
const cnxdb = require("../ConfigBD/postgress_connect");

const atendimento = cnxdb.define("atendimento", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  Idpessoa: {
    type:DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pessoas",
      key: "id",
    }
  },
  Idunidade: {
    type:DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "unidadeSaudes",
      key: "id",
    }
  },

  data_hora_agendamento: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
  },

  necessidades_especiais: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  observacoes_agendamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = atendimento;
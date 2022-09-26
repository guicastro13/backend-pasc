const { DataTypes } = require("sequelize");
const Sequelize = require("../config/sequelize");
module.exports  = Sequelize.define("preco_combustivels", {
  regiao: DataTypes.STRING,
  sigla_estado: DataTypes.STRING,
  sigla_municipio: DataTypes.STRING,
  revenda: DataTypes.STRING,
  cnpj_revenda: DataTypes.STRING,
  nome_da_rua: DataTypes.STRING,
  numero_da_rua: DataTypes.STRING,
  complemento: DataTypes.STRING,
  bairro: DataTypes.STRING,
  cep: DataTypes.STRING,
  produto: DataTypes.STRING,
  data_da_coleta: DataTypes.STRING,
  valor_venda: DataTypes.STRING,
  valor_compra: DataTypes.STRING,
  unidade_de_medida: DataTypes.STRING,
  bandeira: DataTypes.STRING,
});

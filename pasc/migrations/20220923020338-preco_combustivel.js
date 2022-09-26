"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("preco_combustivels", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        premaryKey: true,
        autoIncrement: true,
      },
      regiao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sigla_estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sigla_municipio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      revenda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj_revenda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_da_rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_da_rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_da_coleta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_venda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_compra: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unidade_de_medida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bandeira: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("preco_combustivels");
  },
};

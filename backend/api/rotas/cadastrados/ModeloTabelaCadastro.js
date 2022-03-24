const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    nome: {
        type: Sequelize.STRING,
    },
    cpf: {
        type: Sequelize.STRING,
    },
    telefone: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    cep: {
        type: Sequelize.STRING,
    },
    endereco: {
        type: Sequelize.STRING,
    },
    numero: {
        type: Sequelize.STRING,
    },
    bairro: {
        type: Sequelize.STRING,
    },
    cidade: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'cadastrados',
    createdAt: 'dataCriacao',
    updatedAP: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('cadastro', colunas, opcoes)
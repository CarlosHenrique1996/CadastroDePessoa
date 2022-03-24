const ModeloTabela = require ('../rotas/cadastrados/ModeloTabelaCadastro')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)

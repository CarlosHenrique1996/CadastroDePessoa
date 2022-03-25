const Modelo = require('./ModeloTabelaCadastro')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir (cadastro){
        return Modelo.create(cadastro)
    },
    async pegarPorId(id) {
        const encontrado = await Modelo.findOne({
            where:{
                id: id
            }
        })
        if (!encontrado){
            throw new Error ('Cadastro não encontrado')
        }
        return encontrado
    },
    async atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },
    remover (id){
        return Modelo.destroy({
            where: { id: id }
        })
    } 
}
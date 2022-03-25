const TabelaCadastro = require('./TabelaCadastro')

class Cadastro{
    constructor({ id, nome, cpf, telefone, email, cep, endereco, numero, bairro, cidade, estado, dataCriacao, updatedAt, versao}) {
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.email = email
        this.cep = cep
        this.endereco = endereco
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.id = id
        this.dataCriacao = dataCriacao
        this.updatedAt = updatedAt
        this.versao = versao
    }

    async criar (){
        const resultado = await TabelaCadastro.inserir({
            nome: this.nome, 
            cpf: this.cpf, 
            telefone: this.telefone, 
            email: this.email, 
            cep: this.cep, 
            endereco: this.endereco, 
            numero: this.numero, 
            bairro: this.bairro, 
            cidade: this.cidade, 
            estado: this.estado
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.updatedAt = resultado.updatedAt
        this.versao = resultado.versao
    }
    async carregar (){
        const encontrado = await TabelaCadastro.pegarPorId(this.id)
        this.nome = encontrado.nome
        this.cpf = encontrado.cpf
        this.telefone = encontrado.telefone
        this.email = encontrado.email
        this.cep = encontrado.cep
        this.endereco = encontrado.endereco
        this.numero = encontrado.numero
        this.bairro = encontrado.bairro
        this.cidade = encontrado.cidade
        this.estado = encontrado.estado
        this.dataCriacao = encontrado.dataCriacao
        this.updatedAt = encontrado.updatedAt
    }
    async atualizar (){
        await TabelaCadastro.pegarPorId(this.id)
        const campos = [
            "nome", 
            "cpf", 
            "telefone", 
            "email",
            "cep", 
            "endereco", 
            "numero", 
            "bairro", 
            "cidade", 
            "estado"
        ]
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]

            if (typeof valor === 'string' && valor.length>0){
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0){
            throw new Error ('Não foram fornecidos dados para atualizar')
        }

        await TabelaCadastro.atualizar(this.id, dadosParaAtualizar)
    }

    remover () {
        return TabelaCadastro.remover(this.id)
    }
} 

module.exports = Cadastro
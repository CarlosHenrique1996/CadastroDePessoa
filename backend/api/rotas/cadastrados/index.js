const roteador = require('express').Router()
const TabelaCadastro = require('./TabelaCadastro')
const Cadastro = require('./cadastro')


roteador.get('/', async (res) =>{
    const resultados = await TabelaCadastro.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req, res) =>{
    const dadosRecebidos = req.body
    const cadastro = new Cadastro(dadosRecebidos)
    await cadastro.criar()
    res.send(
        JSON.stringify(cadastro)
    ) 
})

roteador.get('/:idCadastro', async (req, res) => {
    try{
        const id = req.params.idCadastro
        const cadastro = new Cadastro({ id: id })
        await cadastro.carregar()
        res.send(
            JSON.stringify(cadastro)
        )
    } catch(erro){
        res.status(400)
        res.send(
            
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put ('/:idCadastro', async (req, res) => {
    try{
        const id = req.params.idCadastro
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const cadastro = new Cadastro(dados)
        await cadastro.atualizar ()
        res.end()
    } catch (erro) {
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete ('/:idCadastro', async (req, res) =>{
    try{
        const id = req.params.idCadastro
        const cadastro = new Cadastro({ id: id })
        await cadastro.carregar()
        await cadastro.remover()
        res.end()
    } catch (erro) {
        res.status(400)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

module.exports = roteador
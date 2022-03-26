class Lista {
    constructor(){
    }

    fazGet(url) {
        let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
        return request.responseText
    }

    dados(){
        let data = this.fazGet("http://localhost:3000/api/cadastrados");
        let usuarios = JSON.parse(data);
        return usuarios
    }

    listaTabela(){
        const tbody = document.getElementById('tbody')
        const dados = this.dados()
        console.log(dados)
    }



}

var lista = new Lista();
class Lista {
    constructor(){
    }

    fazGet(url) {
        const request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
        return request.responseText
    }

    dados(){
        const data = this.fazGet("http://localhost:3000/api/cadastrados");
        const usuarios = JSON.parse(data);
        return usuarios
    }

    listaTabela(){
        const tbody = document.getElementById('tbody')
        const dados = this.dados()
        const QtdObj =dados.length
        let i = 0

        for( i = 0 ; i < QtdObj; i=i+1){
            const tr = tbody.insertRow();
            const dado = dados[i];

            const tdId = tr.insertCell();
            const tdNome = tr.insertCell();
            const tdCPF = tr.insertCell();
            const tdTelefone = tr.insertCell();
            const tdEmail = tr.insertCell();
            const tdCEP = tr.insertCell();
            const tdEndereco = tr.insertCell();
            const tdNumero = tr.insertCell();
            const tdBairro = tr.insertCell();
            const tdCidade = tr.insertCell();
            const tdEstado = tr.insertCell();
            const tdAcao = tr.insertCell();

            tdId.innerText = dado.id;
            tdNome.innerText = dado.nome;
            tdCPF.innerText = dado.cpf;
            tdTelefone.innerText = dado.telefone;
            tdEmail.innerText = dado.email;
            tdCEP.innerText = dado.cep;
            tdEndereco.innerText = dado.endereco;
            tdNumero.innerText = dado.numero;
            tdBairro.innerText = dado.bairro;
            tdCidade.innerText = dado.cidade;
            tdEstado.innerText = dado.estado;
        }
    }



}

var lista = new Lista();
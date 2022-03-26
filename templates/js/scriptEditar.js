class Edita {
    async buscaDado(){
        setTimeout(this.recuperaId(), 1000)     
        const id = this.recuperaId()
        const dados = JSON.parse(this.idEspecifico(id))

        document.getElementById('idNome').value = dados.nome
        document.getElementById('idCPF').value = dados.cpf
        document.getElementById('idTelefone').value = dados.telefone
        document.getElementById('idEmail').value = dados.email
        document.getElementById('idCEP').value = dados.cep
        document.getElementById('idEndereco').value = dados.endereco
        document.getElementById('idNumero').value = dados.numero
        document.getElementById('idBairro').value = dados.bairro
        document.getElementById('idCidade').value = dados.cidade
        document.getElementById('idEstado').value = dados.estado
    }

    recuperaId(){
        const id = window.localStorage.getItem("id")
        return id
    }

    idEspecifico(id){
        const url =`http://localhost:3000/api/cadastrados/${id}`
        const request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
        return request.responseText
    }

    salva(){        
        const id = window.localStorage.getItem("id")
        const url =`http://localhost:3000/api/cadastrados/${id}`
        let dados = this.lerDados()

        if(this.validaCampos(dados) == true){   
            const req = new XMLHttpRequest()
            req.open("PUT", url, true)
            req.setRequestHeader("Content-type", "application/json")
            req.send(JSON.stringify(dados))
            
            setTimeout(function() {
                window.location.href = "lista.html"            
            }, 2)
            
            alert ('Atualizado com sucesso')
            
            return req
        }
    }




    //-------------------------------------------



    cancela(){
        window.location.href = "lista.html"
    }



    botaoEnvia(){
        const cep = document.getElementById('idCEP').value;
        alert(cep)
    }

    lerDados(){
        let dados = {}

        dados.nome = document.getElementById('idNome').value;
        dados.cpf = document.getElementById('idCPF').value;
        dados.telefone = document.getElementById('idTelefone').value;
        dados.email = document.getElementById('idEmail').value;
        dados.cep = document.getElementById('idCEP').value;
        dados.endereco = document.getElementById('idEndereco').value;
        dados.numero = document.getElementById('idNumero').value;
        dados.bairro = document.getElementById('idBairro').value;
        dados.cidade = document.getElementById('idCidade').value;
        dados.estado = document.getElementById('idEstado').value;

        return dados;
    }
    validaCampos(dados){
        let msg = '';

        if(dados.nome == ''){
            msg += '- Campo NOME vazio\n';
        }
        if(dados.cpf == ''){
            msg += '- Campo CPF vazio\n';
        }
        if(dados.telefone == ''){
            msg += '- Campo TELEFONE vazio\n';
        }
        if(dados.email == ''){
            msg += '- Campo E-MAIL vazio\n';
        }
        if(dados.cep == ''){
            msg += '- Campo CEP vazio\n';
        }
        if(dados.endereco == ''){
            msg += '- Campo ENDEREÇO vazio\n';
        }
        if(dados.numero == ''){
            msg += '- Campo NUMERO vazio\n';
        }
        if(dados.bairro == ''){
            msg += '- Campo BAIRRO vazio\n';
        }
        if(dados.cidade == ''){
            msg += '- Campo CIDADE vazio\n';
        }
        if(dados.estado == ''){
            msg += '- Campo ESTADO vazio\n';
        }
        if(msg != ''){
            alert(msg);
            return false
        }

        return true;

    }


}

var edita = new Edita()
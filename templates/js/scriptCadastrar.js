class Cadastro {

    constructor(){
        this.arrayDados = []

    }

    salva(){         
        const url = "http://localhost:3000/api/cadastrados" 
        let dados = this.lerDados();

        if(this.validaCampos(dados) == true){   
            let req = new XMLHttpRequest()
            req.open("POST", url, true)
            req.setRequestHeader("Content-type", "application/json")
            req.send(JSON.stringify(dados))

            setTimeout(function() {
                window.location.reload(1);
            }, 2);


            alert ('Cadastrado com sucesso')

            return req

        }       
        
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

    limpa(){         
        document.getElementById('idNome').value = "";
        document.getElementById('idCPF').value = "";
        document.getElementById('idTelefone').value = "";
        document.getElementById('idEmail').value = "";
        document.getElementById('idCEP').value = "";
        document.getElementById('idEndereco').value = "";
        document.getElementById('idNumero').value = "";
        document.getElementById('idBairro').value = "";
        document.getElementById('idCidade').value = "";
        document.getElementById('idEstado').value = "";
        alert('Campos limpos')        
    }

    
    
    async pesquisarCep(){
        const cep = document.getElementById('idCEP').value;
        if(cep.length == 8 || cep.length == 9){
            const url = `https://viacep.com.br/ws/${cep}/json/`
    
            const dados = await fetch(url)
            const endereco = await dados.json()
            
            document.getElementById('idEndereco').value = endereco.logradouro;
            document.getElementById('idBairro').value = endereco.bairro;
            document.getElementById('idCidade').value = endereco.localidade;
            document.getElementById('idEstado').value = endereco.uf;
        }else{
            alert('cep invalido')
            document.getElementById('idEndereco').value = "";
            document.getElementById('idNumero').value = "";
            document.getElementById('idBairro').value = "";
            document.getElementById('idCidade').value = "";
            document.getElementById('idEstado').value = "";
        }   
    }


}

var cadastro = new Cadastro();
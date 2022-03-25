class Cadastro {

    constructor(){

    }

    salva(){         
        document.getElementById('idNome').value = "";
        document.getElementById('idCPF').value = "";
        document.getElementById('idTelefone').value = "";
        document.getElementById('idEmail').value = "";
        document.getElementById('idCEP').value = "";
        document.getElementById('idEndereco').value = "";
        document.getElementById('idBairro').value = "";
        document.getElementById('idCidade').value = "";
        document.getElementById('idEstado').value = "";
        alert('Enviado com sucesso!')      
    }

    limpa(){         
        document.getElementById('idNome').value = "";
        document.getElementById('idCPF').value = "";
        document.getElementById('idTelefone').value = "";
        document.getElementById('idEmail').value = "";
        document.getElementById('idCEP').value = "";
        document.getElementById('idEndereco').value = "";
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
            document.getElementById('idCEP').value = " ";
            document.getElementById('idEndereco').value = " ";
            document.getElementById('idBairro').value = " ";
            document.getElementById('idCidade').value = " ";
            document.getElementById('idEstado').value = " ";
        }   
    }


}

var cadastro = new Cadastro();
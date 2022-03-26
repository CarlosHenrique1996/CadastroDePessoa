class Edita {

    constructor(){

    }


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



    //-------------------------------------------


    salva(){
        alert('Salva')  
    }

    cancela(){
        window.location.href = "lista.html"
    }



    botaoEnvia(){
        const cep = document.getElementById('idCEP').value;
        alert(cep)
    }


}

var edita = new Edita();
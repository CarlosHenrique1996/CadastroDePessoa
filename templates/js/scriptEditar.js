class Cadastro {

    constructor(){

    }

    salva(){
        alert('Salva')  
    }

    limpa(){
        alert('Limpa')        
    }



    botaoEnvia(){
        const cep = document.getElementById('idCEP').value;
        alert(cep)
    }


}

var cadastro = new Cadastro();
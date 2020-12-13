function gerarSenha(){
    let nome = document.getElementById('nome').value
    let senha = ""

    if (validarNome(nome)) {
        senha = obterSobrenome(nome) + contarVogais(nome);

        document.getElementById('resultado').innerHTML = "<h3>Senha inicial: " + senha + "</h3>"
    } else {
        document.getElementById('resultado').innerHTML = "<h3>Digite o nome completo </h3>"
    }




}

function obterSobrenome(name){
    let sobrenome = name.substring(name.lastIndexOf(" ")+1);

    return sobrenome;
}

function contarVogais(name){
    let totalVogal = 0
    let vogais = ['a', 'e', 'i', 'o', 'u']
    

    for ( let i = 0; i < name.length; i++ ) {
        if(vogais.indexOf(name[i]) != -1) {
            totalVogal++
        }
    }

    return totalVogal;
}

function validarNome(name){
    nome = name
    validar = false
    
    if(nome.match(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/) && nome.trim().split(' ').length == 2){
       // alert("nome válido");
       validar = true
    }else{
        validar = false
       // alert("nome INVÁLIDO");
    }
    return validar
 }
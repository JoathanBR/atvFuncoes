function retornarTracos(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    if(nome == '' || idade == '' || isNaN(idade)){
        alert("Digite um nome ou uma idade válidos!")
    }
    else{
        document.getElementById('resultado').innerHTML += '<h3>' + nome + '<br>----- -- -----<h3>'

        categorizarAluno(idade)
    }
}

function categorizarAluno(valor){
    if(valor <= 12 && valor > 0){
        document.getElementById('resultado').innerHTML += '<h3>Categoria: Infantil</h3>'
    }
    else if(valor > 12 && valor <=18){
        document.getElementById('resultado').innerHTML += '<h3>Categoria: Juvenil</h3>'
    }
    else if (valor > 18){
        document.getElementById('resultado').innerHTML += '<h3>Categoria: Adulto</h3>'
    }
    else
    document.getElementById('resultado').innerHTML += '<h3>Categoria: Múmia, vampiro, zumbi, monstro...</h3>'
}
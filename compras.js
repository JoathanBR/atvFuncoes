
let produtos= new Array()


function limparLista(){
    document.getElementById('resultado').innerHTML = " "
    produtos = []
}

function adcLista(){
    let produto = document.getElementById('produto').value
    
    produtos.push(produto)
    produtos.sort();
    let list = "Produtos Adicionados <br> --------------- <br>"

    console.log(produtos)

    for (let index = 0; index < produtos.length; index++) {
        list += produtos[index] + "<br>"
        console.log(list)
    }
    document.getElementById('resultado').innerHTML = list
    //for (let index = 0; index < produtos.length; index++) {
    //    document.getElementById('resultado').innerHTML += produtos[index]
    //    
    //}
   // produtos.forEach(function(name){
   //     document.getElementById('resultado').innerHTML += name +"<br>"
   // })
  
   // document.getElementById('resultado').innerHTML = list
}


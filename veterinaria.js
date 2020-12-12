document.getElementById('convenio').style.display = "none"

function mostrarConvenio(){
    document.getElementById('convenio').style.display = "block"
}

function sumirConvenio(){
    document.getElementById('convenio').style.display = "none"
    document.getElementById('convenio').value = 'none'
}

function getRadioValor(name){
    var radio = document.getElementsByName(name);
    
    for(var i = 0; i < radio.length; i++){
     if(radio[i].checked){ 
      return radio[i].value;
     }
    
    }
    
    return null;
   }

function calcularDesconto(){
    let valor = document.getElementById('valor').value
    let selectConvenio = document.getElementById('selectConvenio').value
    let desconto = 0
    let newValor = 0

    if(valor == '' || isNaN(valor)){
        alert("Digite um valor válido!")
    }
    else if(selectConvenio == "amgAnimais"){
        desconto = 0.2 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }
    else if(selectConvenio == "sdAnimal"){
        desconto = 0.5 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }
    else if(selectConvenio == "none"){
        desconto = 0.1 * valor
        newValor = valor - desconto
        document.getElementById('resultado').innerHTML = "<h3>Desconto R$: " + desconto.toFixed(2) + "<br>A pagar R$: " + newValor.toFixed(2) + "</h3>"
    }

}
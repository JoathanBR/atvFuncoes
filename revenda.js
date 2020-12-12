function revenda(){
    let modelo = document.getElementById('modelo').value
    let ano = document.getElementById('ano').value
    let valor = parseFloat(document.getElementById('valor').value)
     
    let anoAtual = new Date().getFullYear();
    let desconto = 0
    let diferenca = 0
    diferenca = anoAtual - ano

    if(valor == '' || isNaN(valor) || ano == '' || isNaN(ano) || modelo == ''){
        alert("Digite um valor válido!")
    }
    else if(ano == anoAtual){
        desconto = (0.08 * valor) + valor
        
        document.getElementById('resultado').innerHTML = "<h3>" + modelo + " - Novo<br>Preço de Venda R$: " + desconto.toFixed(2) + "</h3>"
    }
    else if(diferenca <= 2){
        desconto = (0.1 * valor) + valor
        
        document.getElementById('resultado').innerHTML = "<h3>" + modelo + " - Seminovo<br>Preço de Venda R$: " + desconto.toFixed(2) + "</h3>"
    }

    else if(diferenca > 2){
        desconto = (0.1 * valor) + valor
        
        document.getElementById('resultado').innerHTML = "<h3>" + modelo + " - Usado<br>Preço de Venda R$: " + desconto.toFixed(2) + "</h3>"
    }

    else{
        document.getElementById('resultado').innerHTML = "<h3>SEU CARRO NEM FOI FABRICADO AINDA</h3>"
    }
}
function comprar(){
    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade <= 0) {
        alert('Quantidade inválida');
        return;
    }

    if (ingresso.value == 'pista'){
        comprarPista(quantidade);
    } else if (ingresso == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    
    
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert('Quantidade indisponível');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Ingresso comprado com sucesso');
    }
}

function comprarSuperior(quantidade){
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    if (quantidade > qtdSuperior) {
        alert('Quantidade indisponível');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Ingresso comprado com sucesso');
    }
}

function comprarInferior(quantidade){
    let qtdInferior = document.getElementById('qtd-inferior').textContent;
    if (quantidade > qtdInferior) {
        alert('Quantidade indisponível');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Ingresso comprado com sucesso');
    }
}
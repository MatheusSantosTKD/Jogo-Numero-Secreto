function verificaSeOChuteFoiValido(chute) {
    const numero = +chute

    if(VerificaSeENumero(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>"
        return
}

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h2>O número secreto era ${numeroSecreto}</h2>
        <button id ="jogar-novamente" class ="btn-jogar"><i class="fa-solid fa-arrows-rotate"></i> Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
        
    }
}

function VerificaSeENumero(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>  {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
const button = document.querySelector('#button').addEventListener('click', pegarDados);

function pegarDados() {
    const camp1 = document.querySelector('#options1').value;

    const camp2 = document.querySelector('#options2').value;

    const temperaturaValor = Number(document.querySelector('#input').value);

    verificaTemperatura(temperaturaValor);
}

function verificaTemperatura(temperaturaValor) {
    if (isNaN(temperaturaValor)) {
        window.alert('O campo de digitação só aceita números');
    }
    else if (!temperaturaValor === true) {
        window.alert('O campo de digitação está vazio');
    }

}


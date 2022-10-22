const button = document.querySelector('#button').addEventListener('click', pegarDados);

const p = document.querySelector('#exibir');

function pegarDados() {
    const camp1 = document.querySelector('#options1').value;

    const camp2 = document.querySelector('#options2').value;

    const temperaturaValor = document.querySelector('#input').value;

    verificaEntradaDosDados(camp1, camp2, temperaturaValor);
}

function verificaEntradaDosDados(camp1, camp2, temperaturaValor) {
    if (isNaN(temperaturaValor)) {
        p.innerHTML = 'O campo de digitação só aceita números.';
    }
    else if (!temperaturaValor === true) {
        p.innerHTML = 'O campo de digitação está vazio.';
    }
    else {
        conversao(camp1, camp2, temperaturaValor)
    }
}

function conversao(camp1, camp2, temperaturaValor) {
    if (camp1 === camp2) {
        p.innerHTML = 'Para converter, selecione ao menos uma escala de temperatura diferente.';
    }
    else {
        if ((camp1 === 'Celsius') && (camp2 === 'Fahrenheit')){
            const fahrenheit = (temperaturaValor * 9 / 5) + 32
            p.innerHTML = `${temperaturaValor}°C (grau(s) Celsius) é igual a ${fahrenheit}°F (grau(s) Fahrenheit). <br> <br>
            Fórmula: (°C * 9 / 5) + 32`;
        }
        else if ((camp1 === 'Celsius') && (camp2 === 'Kelvin')) {
            const Kelvin = Number(temperaturaValor) + 273.15;
            p.innerHTML = `${temperaturaValor}° (grau(s) Celsius) é igual a ${Kelvin}K (grau(s) Kelvin). <br> <br>
            Fórmula: °C + 273,15`
        }
    }
}


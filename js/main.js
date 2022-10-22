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
            p.innerHTML = `${temperaturaValor}° (grau(s) Celsius) é igual a ${Kelvin}K (Kelvin). <br> <br>
            Fórmula: °C + 273,15`;
        }

        else if ((camp1 === 'Fahrenheit') && (camp2 === 'Celsius')) {
            const celsius = (Number(temperaturaValor) - 32) * 5 / 9;
            p.innerHTML = `${temperaturaValor}°F (grau(s) Fahrenheit) é igual a ${celsius}°C (grau(s) Celsius). <br> <br>
            Fórmula: (°F - 32) * 5 / 9`;
        }

        else if ((camp1 === 'Fahrenheit') && (camp2 === 'Kelvin')) {
            const Kelvin = ((Number(temperaturaValor) - 32) * 5 / 9 + 273.15).toFixed(3);
            p.innerHTML = `${temperaturaValor}°F (grau(s) Fahrenheit) é igual a ${Kelvin}k (Kelvin). <br> <br>
            Fórmula: (°F - 32) * 5 / 9 + 273.15`;
        }

        else if ((camp1 === 'Kelvin') && (camp2 === 'Celsius')) {
            const celsius = Number(temperaturaValor) - 273.15;
            p.innerHTML = `${temperaturaValor}K (Kelvin) é igual a ${celsius}°C (grau(s) Celsius). <br> <br>
            Fórmula: K - 273,15`;
        }

        else if ((camp1 === 'Kelvin') && (camp2 === 'Fahrenheit')) {
            const fahrenheit = ((Number(temperaturaValor) - 273.15) * 9 / 5 + 32).toFixed(2);
            p.innerHTML = `${temperaturaValor}K (Kelvin) é igual a ${fahrenheit}°F (grau(s) Fahrenheit). <br> <br>
            Fórmula: (k - 273,15) * 9 / 5 + 32`;
        }
    }
}
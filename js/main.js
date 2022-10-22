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
            const fahrenheit = (temperaturaValor * 9 / 5) + 32;

            exibirNatela(temperaturaValor, '°C (grau(s) celsius)', fahrenheit, '°F (grau(s) Fahrenheit)', '(°C * 9 / 5) + 32');
        }

        else if ((camp1 === 'Celsius') && (camp2 === 'Kelvin')) {
            const Kelvin = Number(temperaturaValor) + 273.15;
            
            exibirNatela(temperaturaValor, '°C (grau(s) celsius)', Kelvin, 'K (kelvin)', '(°C + 273,15)');
        }

        else if ((camp1 === 'Fahrenheit') && (camp2 === 'Celsius')) {
            const celsius = ((Number(temperaturaValor) - 32) * 5 / 9).toFixed(2);
            
            exibirNatela(temperaturaValor, '°F (grau(s) Fahrenheit)', celsius, '°C (grau(s) celsius)', '(°F - 32) * 5 / 9');
        }

        else if ((camp1 === 'Fahrenheit') && (camp2 === 'Kelvin')) {
            const Kelvin = ((Number(temperaturaValor) - 32) * 5 / 9 + 273.15).toFixed(3);

            exibirNatela(temperaturaValor, '°F (grau(s) Fahrenheit)', Kelvin, 'K (Kelvin)', '(°F - 32) * 5 / 9 + 273,15');
        }

        else if ((camp1 === 'Kelvin') && (camp2 === 'Celsius')) {
            const celsius = Number(temperaturaValor) - 273.15;
    
            exibirNatela(temperaturaValor, 'K (Kelvin)', celsius, '°C (grau(s) celsius)', 'K - 273,15');
        }

        else if ((camp1 === 'Kelvin') && (camp2 === 'Fahrenheit')) {
            const fahrenheit = ((Number(temperaturaValor) - 273.15) * 9 / 5 + 32).toFixed(2);

            exibirNatela(temperaturaValor, 'K (Kelvin)', fahrenheit, '°F (grau(s) Fahrenheit)', '(k - 273,15) * 9 / 5 + 32');
        }
    }
}

function exibirNatela(valorTemperatura, escalaTemp1, temperatura, escalaTemp2, formula) {
    p.innerHTML = `${valorTemperatura} ${escalaTemp1} é igual a ${temperatura} ${escalaTemp2}. <br> <br>
    Fórmula: ${formula}`;
}
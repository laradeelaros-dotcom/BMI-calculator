/*variavél global*/
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== ''){
        
        const valorIMC = (weight / (height * height)).toFixed(1); /*toFixed serve para arredondar o valor*/
        
        let classification = '';

        if (valorIMC < 18.5){
            classification = 'você está um pouco abaixo do peso ideal. Que tal um acompanhamento nutricional para ganhar massa de forma saudável?';
        }else if (valorIMC < 25){
            classification = 'está tudo certo por aqui! Você está na sua faixa de peso ideal, continue com os bons hábitos.';
        }else if (valorIMC < 30){
            classification  = 'você está um pouco acima do peso. Ajustar alguns hábitos diários já pode fazer uma grande diferença!';
        }else if (valorIMC < 35){
            classification = 'você está bem acima do peso. (Obesidade grau 1). Priorize sua saúde e considere buscar a orientação de um especialista.'
        }else if (valorIMC < 40) {
            classification = 'seu resultado indica Obesidade Grau II. Este nível aumenta significativamente o risco de condições crônicas. É altamente recomendável uma consulta médica para avaliar sua saúde metabólica.'
        }else {
            classification = 'seu resultado indica Obesidade Grau III. Este é um quadro que requer acompanhamento especializado imediato para proteger seu sistema cardiovascular e sua mobilidade.'
        }

        result.textContent = `${name}, seu IMC é de ${valorIMC}. Sendo assim, ${classification}`;

    } else {
        result.textContent = "Por favor, preencha todos os campos!"
    }
    
}

calculate.addEventListener('click', imc)

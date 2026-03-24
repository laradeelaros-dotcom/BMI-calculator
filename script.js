/*variavél global*/
const calculate = document.getElementById('calculate');


function imc () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== ''){
        
        const valorIMC = (weight / (height * height)).toFixed(1); /*toFixed serve para arredondar o valor*/
    

        result.textContent = valorIMC;
    } else {
        result.textContent = "ERRO CRIITICO NO SISTEMA"
    }
    
}

calculate.addEventListener('click', imc)

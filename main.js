const inputName = document.querySelector('#nombre');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const resultado = document.querySelector('.container-resultado');
const button = document.querySelector('#button')

function calcularImc(peso,altura) {
    return peso / (altura * altura);
};

function mesajeAdvertencia(imc) {
    if (imc < 18.5) {
        alert("IMC debajo de lo recomendado");
    }else if (imc >= 18.5 && imc <= 24.9) {
        alert("IMC considerado como NORMAL");
    }else if(imc >= 25 && imc <= 29.9){
        alert("IMC considerado como SOBREPESO");
    }else if(imc > 30){
        alert("IMC considerado como OBESIDAD");
    }
    console.log(imc);
}

function mostrarResultado() {
    let div = document.createElement('div');
    div.classList.add('resultado');
    div.textContent=calcularImc(inputPeso.value, inputAltura.value);
    resultado.appendChild(div);
    console.log(div.textContent);
    mesajeAdvertencia(div.textContent);
}

button.onclick = mostrarResultado;

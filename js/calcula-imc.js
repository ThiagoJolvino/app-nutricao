var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona a tag que envolve os dados do primeiro paciente
var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    

    var pesoEhValido = pesoIsValid(peso);
    var alturaEhValida = alturaIsValid(altura);

 
    pacienteIMC = paciente.querySelector('.info-imc');

    if(!pesoEhValido){
        pacienteIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        pacienteIMC.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaIMC(peso, altura);
        pacienteIMC.textContent = imc;
    }

}

function pesoIsValid(peso){
    if(peso <= 0 || peso >= 1000){
        return false;
    }else{
        return true; 
    }
}
function alturaIsValid(altura){
    if(altura <= 0 || altura >= 3.0){
        return false;
    }else{
        return true; 
    }
}

function calculaIMC(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}





// console.log(imc);
// console.log(paciente); //tr
// console.log(tdPeso); //td que tem o peso
// console.log(peso); // obter 100
// console.log(altura); //obter 2.0


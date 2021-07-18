var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona a tag que envolve os dados do primeiro paciente
var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes.length);

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);

    var pesoIsValid = true;
    var alturaIsValid = true;
    pacienteIMC = paciente.querySelector('.info-imc');

    if(peso <= 0 || peso >= 1000){
        pesoIsValid = false;
        pacienteIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        alturaIsValid = false;
        pacienteIMC.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido");
    }

    if(alturaIsValid && pesoIsValid){
        pacienteIMC.textContent = imc.toFixed(2);
    }

}




// console.log(imc);
// console.log(paciente); //tr
// console.log(tdPeso); //td que tem o peso
// console.log(peso); // obter 100
// console.log(altura); //obter 2.0


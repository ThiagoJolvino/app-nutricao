var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona a tag que envolve os dados do primeiro paciente
var paciente = document.querySelector("#primeiro-paciente")

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
    pacienteIMC.textContent = "Peso inválido"
}

if(altura <= 0 || altura >= 3.00){
    alturaIsValid = false;
    pacienteIMC.textContent = "Altura inválida"
}

if(alturaIsValid && pesoIsValid){
    pacienteIMC.textContent = imc;
}



// console.log(imc);
// console.log(paciente); //tr
// console.log(tdPeso); //td que tem o peso
// console.log(peso); // obter 100
// console.log(altura); //obter 2.0


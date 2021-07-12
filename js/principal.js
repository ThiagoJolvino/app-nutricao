var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Seleciona a tag que envolve os dados do primeiro paciente
var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

pacienteIMC = paciente.querySelector('.info-imc');
pacienteIMC.textContent = imc;

// console.log(imc);
// console.log(paciente); //tr
// console.log(tdPeso); //td que tem o peso
// console.log(peso); // obter 100
// console.log(altura); //obter 2.0


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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona")

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imc = peso / (altura * altura);
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    

})





// console.log(imc);
// console.log(paciente); //tr
// console.log(tdPeso); //td que tem o peso
// console.log(peso); // obter 100
// console.log(altura); //obter 2.0


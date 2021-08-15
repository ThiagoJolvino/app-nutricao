var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteForm(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        showErrorMessages(erros);        
        return;
    }
    adicionaPacienteTabela(paciente);
    
    form.reset();
    var errorMessage = document.querySelector("#mensagens-erro");
    errorMessage.innerHTML = "";
})

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente 
}
function showErrorMessages(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td; 
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode estar em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode estar em branco");
    }else if(!alturaIsValid(paciente.altura)) erros.push("Altura é invalida!");
    
    if(paciente.peso.length == 0){
        erros.push("O peso não pode estar em branco.");
    }else if(!pesoIsValid(paciente.peso)) erros.push("Peso é inválido!");
    return erros;
}
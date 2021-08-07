var tabela = document.querySelectorAll("#tabela-pacientes");

tabela.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
    });
});
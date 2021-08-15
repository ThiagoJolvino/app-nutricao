var botao = document.querySelector("#buscar-paciente");
botao.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);
            pacientes.forEach(function(paciente){
            adicionaPacienteTabela(paciente);

            })
        }else{
            console.log(xhr.status);
            console.log(xhr.response);
            
            erroAjax.classList.remove("invisivel");
        }
        
    });
    xhr.send();

});
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});
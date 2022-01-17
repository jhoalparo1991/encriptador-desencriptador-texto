let btnLimpiar = document.querySelector("#limpiar");

btnLimpiar.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("#texto_encriptar").value = " ";
});



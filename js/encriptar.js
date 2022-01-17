document.addEventListener("DOMContentLoaded", () => {
  let textoEncriptar = document.querySelector("#texto_encriptar");
  let textoCifrado = document.querySelector("#texto_cifrado");

  let btnEncriptar = document.querySelector("#encriptar");
  
  btnEncriptar.addEventListener("click", encriptar);

  function encriptar(e) {
    // Cancel refresh
    e.preventDefault();

    let texto = textoEncriptar.value.toLowerCase();
    if(campo_vacio(texto)){
      return;
    }
    console.log(texto);
    let data = texto.split("");
    let cifrado = "";
    let nuevoTexto = [];
    data.forEach((letra, index) => {
        cifrado = letra
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        nuevoTexto.push(cifrado);
    });

    textoCifrado.value = nuevoTexto.join('');
    //  Clear textarea
    textoEncriptar.value = ""
  }


  function campo_vacio(campo){
    if(campo.length <=0 ){
      error = document.querySelector('.mensaje-error');
      error.textContent = "*Ingrese el texto";
     setTimeout(()=>{
      error.textContent = "";
     },3000)
      return true;
    }
    return false
  }
  
});

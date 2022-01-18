document.addEventListener("DOMContentLoaded", () => {
  let textoEncriptar = document.querySelector("#texto_encriptar");
  let textoCifrado = document.querySelector("#texto_cifrado");

  let btndesencriptar = document.querySelector("#desencriptar");

  btndesencriptar.addEventListener("click", desencriptar);

  function desencriptar(e) {
    // Cancel refresh
    e.preventDefault();

    let texto = textoEncriptar.value;
    if (campo_vacio(texto)) {
      return;
    }
    let nuevoTexto = "";

    nuevoTexto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
      .replace(/0/g, "")
      .replace(/1/g, "")
      .replace(/2/g, "")
      .replace(/3/g, "")
      .replace(/4/g, "")
      .replace(/5/g, "")
      .replace(/6/g, "")
      .replace(/7/g, "")
      .replace(/8/g, "")
      .replace(/9/g, "");
    console.log(nuevoTexto.toLowerCase());
    textoCifrado.value = nuevoTexto.toLowerCase();
    //  Clear textarea
    textoEncriptar.value = "";
  }

  function campo_vacio(campo) {
    if (campo.length <= 0) {
      error = document.querySelector(".mensaje-error");
      error.textContent = "*Ingrese el texto";
      setTimeout(() => {
        error.textContent = "";
      }, 3000);
      return true;
    }
    return false;
  }
});

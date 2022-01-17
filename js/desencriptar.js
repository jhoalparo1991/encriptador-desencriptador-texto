document.addEventListener("DOMContentLoaded", () => {
  let textoEncriptar = document.querySelector("#texto_encriptar");
  let textoCifrado = document.querySelector("#texto_cifrado");

  let btndesencriptar = document.querySelector("#desencriptar");

  btndesencriptar.addEventListener("click", desencriptar);

  function desencriptar(e) {
    // Cancel refresh
    e.preventDefault();

    let texto = textoEncriptar.value;
    let nuevoTexto = "";

    nuevoTexto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    console.log(nuevoTexto);
    textoCifrado.value = nuevoTexto;
    //  Clear textarea
    textoEncriptar.value = "";
  }
});

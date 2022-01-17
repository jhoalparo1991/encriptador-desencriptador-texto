let textoCifrado = document.querySelector("#texto_cifrado");

let btncopiar = document.querySelector("#copiar");

btncopiar.addEventListener("click", (e) => {
  e.preventDefault();
  textoCifrado.select();
  navigator.clipboard.writeText(textoCifrado.value.toLowerCase())
});

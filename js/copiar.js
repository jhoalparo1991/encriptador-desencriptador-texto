let textoCifrado = document.querySelector("#texto_cifrado");
let texto_encriptar = document.querySelector("#texto_encriptar");

let btncopiar = document.querySelector("#copiar");

btncopiar.addEventListener("click", async (e) => {
  e.preventDefault();

  textoCifrado.select();
  await navigator.clipboard.writeText(textoCifrado.value.toLowerCase())
  const paste = await navigator.clipboard.readText()
  texto_encriptar.value = paste;
});


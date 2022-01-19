function validar_texto(e) {
  let patron = /^[a-z ]$/;
  return patron.test(e.key);

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
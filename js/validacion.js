function validar_texto(e) {
  let patron = /^[a-z ]$/;
  return patron.test(e.key);

}
